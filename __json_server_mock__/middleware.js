// eslint-disable-next-line no-undef
module.exports = (req, res, next) => {
    if (req.method === 'POST' && req.path === '/login') {
        if (req.body.username === 'jack' && req.body.password === '123456') {
            return res.status(200).json({
                user: {
                    id:99,
                    name: 'Jack',
                    token: 'safdasdjfkcxvsds=='
                }
            })
        } else {
            return res.status(400).json({ message: '账号或者密码不正确' })
        }
    }

    next()
}