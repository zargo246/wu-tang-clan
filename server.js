const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')

const server = http.createServer(function (req, res) {

    const page = url.parse(req.url).pathname
    const params = querystring.parse(url.parse(req.url).query)

    console.log(page)

    if (page == '/') {

        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        })

    }

    else if (page == '/api') {

        const firstNames = [
            'Ghost',
            'Golden',
            'Iron',
            'Shadow',
            'Silent',
            'Thunder',
            'Mystic',
            'Young',
            'Crazy',
            'Master'
        ]

        const lastNames = [
            'Dragon',
            'Monk',
            'Tiger',
            'Sword',
            'Assassin',
            'Wizard',
            'Samurai',
            'Bandit',
            'Prophet',
            'Destroyer'
        ]

        const randomFirst =
            firstNames[Math.floor(Math.random() * firstNames.length)]

        const randomLast =
            lastNames[Math.floor(Math.random() * lastNames.length)]

        const wuTangName = `${randomFirst} ${randomLast}`

        console.log(params)
        console.log(wuTangName)

        const objToJson = {
            wuTangName: wuTangName
        }

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(objToJson))

    }

    else if (page == '/css/style.css') {

        fs.readFile('css/style.css', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/css' })
            res.write(data)
            res.end()
        })

    }

    else if (page == '/js/main.js') {

        fs.readFile('js/main.js', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' })
            res.write(data)
            res.end()
        })

    }

    else {

        console.log('something went wrong!!')
    }
})

server.listen(8000)

console.log('Server running on port 8000')