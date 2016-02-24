
var targetprocessApi = require('tp-api');
var config = require("../config/config.targetprocess_impediments");
var cronJob = require('cron').CronJob;

try {
  var apiClient = targetprocessApi({
    domain: config.api.host,
    token: config.api.token,
    version: config.api.version,
    protocol: config.api.protocol,
  });

  var getProfileImage = function(userId) {
    if (!config.profileImageMapping.hasOwnProperty(userId)) {
      return '';
    }
    return config.profileImageMapping[userId];
  };

  var getResponsibleUsers = function(data) {
    var responsibleUsers = [];
    var responsibleUserIds = [];
    data.forEach(function(entry) {
      var userId = entry.Responsible.Id;
      var userName = entry.Responsible.FirstName;
      var profileImageUrl = getProfileImage(userId);
      if (responsibleUserIds.indexOf(userId) < 0) {
        responsibleUserIds.push(userId);
        responsibleUsers.push({
          id: userId,
          name: userName,
          imgUrl: profileImageUrl,
          count: 1
        });
      } else {
          for (var i=0; i < responsibleUsers.length; i++) {
            if (responsibleUsers[i].id == userId) {
              responsibleUsers[i]['count'] = responsibleUsers[i]['count'] + 1;
            }
          }
      }
    });
    return responsibleUsers;
  };

  var update = function() {
    apiClient('Impediments')
      .where("EntityState.Name ne 'Resolved'")
      .context(config.api.context)
      .then(function(error, data) {
        if (error) return console.log('Error:', error)
        var responsibleUsers = [];
        if (data.length > 0) {
          responsibleUsers = getResponsibleUsers(data)
        }

        send_event(config.eventName, {
          value: data.length,
          responsibleUsers: responsibleUsers
        })
      });
  };

  new cronJob(config.cronInterval, update, null, true, null);
  module.exports.update = update;

} catch(error) {
  console.log('Exception:', error);
}