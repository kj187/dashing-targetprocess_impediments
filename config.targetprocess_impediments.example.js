
module.exports = {

    eventName: 'targetprocess_impediments',
    cronInterval: '15 * * * * *',

    api: {
        host: 'www.host.com',
        context: '2439DD66D093095E290CF98FB987D4B7',
        version: '1',
        protocol: 'https',
        token: 'bcdefabcdefabcdefgbcdefabcdefabcdefg'
        // or instead of an API token
        // username: '',
        // password: '',
    },

    profileImageMapping: {
        // targetprocess user id : Profile image URL
        '85861': 'https://avatars0.githubusercontent.com/u/1647861?v=3&s=96',
    }
}