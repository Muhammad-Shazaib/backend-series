require('dotenv').config()


console.log("BISMILALLAH");


const express = require('express')
const app = express()
const port = 5000

const githubData = {
    "login": "Muhammad-Shazaib",
    "id": 161204635,
    "node_id": "U_kgDOCZvJmw",
    "avatar_url": "https://avatars.githubusercontent.com/u/161204635?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Muhammad-Shazaib",
    "html_url": "https://github.com/Muhammad-Shazaib",
    "followers_url": "https://api.github.com/users/Muhammad-Shazaib/followers",
    "following_url": "https://api.github.com/users/Muhammad-Shazaib/following{/other_user}",
    "gists_url": "https://api.github.com/users/Muhammad-Shazaib/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Muhammad-Shazaib/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Muhammad-Shazaib/subscriptions",
    "organizations_url": "https://api.github.com/users/Muhammad-Shazaib/orgs",
    "repos_url": "https://api.github.com/users/Muhammad-Shazaib/repos",
    "events_url": "https://api.github.com/users/Muhammad-Shazaib/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Muhammad-Shazaib/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Muhammad Shazaib",
    "company": null,
    "blog": "",
    "location": "Karachi ",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 54,
    "public_gists": 0,
    "followers": 1,
    "following": 13,
    "created_at": "2024-02-25T09:57:00Z",
    "updated_at": "2025-07-12T15:03:28Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/facebook', (req, res) => {
    res.send('shazaib shazi!')
})

app.get('/instagram', (req, res) => {
    res.send('shazaib shazi!')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.POST,

    () => {
        console.log(`Example app listening on port ${port}`)
    })