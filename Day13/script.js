const git = document.querySelector('#github');
const fun = document.querySelector('#fun');
const deepai = document.querySelector('#deepai');
// const updated = document.querySelector('.updated');
const aside = document.querySelector('aside');
const main = document.querySelector('main');
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// let d = new Date("2020-11-07T09:42:42Z");
// month = monthNames[d.getMonth()]
// day = d.getDate()
// updated.innerHTML = `${month} ${day}`



async function getData(username){
    const res = await fetch('https://api.github.com/users/'+username)
    const data = await res.json();
    return data;
}

async function getRepos(login){
    const res = await fetch(`https://api.github.com/users/${login}/repos`)
    const data = await res.json();
    return data;
}

function getName(){
    var name = localStorage.getItem("name");
}

fun.addEventListener('click' , () => {
    aside.innerHTML = "";
    let mainDiv = document.createElement('div');
    mainDiv.classList.add("container")
    mainDiv.innerHTML = "Under Development"
    aside.appendChild(mainDiv);
})
deepai.addEventListener('click' , () => {
    aside.innerHTML = "";
    let mainDiv = document.createElement('div');
    mainDiv.classList.add("container")
    mainDiv.innerHTML = "Under Development"
    aside.appendChild(mainDiv);
})
git.addEventListener('click' , () => {
    aside.innerHTML = "";
    let mainDiv = document.createElement('div');
    mainDiv.classList.add("container")
    let heading = document.createElement('div')
    heading.classList.add("flex")
    let span1 = document.createElement('span')
    span1.innerHTML = "Profile Search"
    let span2 = document.createElement('span')
    let btn = document.createElement('button')
    btn.id = "searchProfileBtn"
    btn.innerHTML = "Search"
    // let ppl = document.createElement('img')
    // ppl.src = "lib/people.svg"
    span2.appendChild(btn)
    heading.append(span1, span2)
    
    let span3 = document.createElement('span')
    span3.innerHTML = "github.com/"
    let input = document.createElement('input')
    input.type = "text"
    input.placeholder = "Find a Profile"
    let actionPanel = document.createElement('div')
    
    actionPanel.append(span3, input)

    mainDiv.append(heading,actionPanel)
    aside.append(mainDiv)

    btn.addEventListener('click', async () => {
        let response = getData(input.value);
        let user = await response;
        // console.log(user);

        let title1 = document.createElement('h2')
        title1.innerHTML = "About"

        let article = document.createElement('article')
        let img = document.createElement('img')
        img.src = user.avatar_url
        img.id = "profilePic"
        let info = document.createElement('content')
        info.id = "info"
        let name = document.createElement('div')
        name.id="name"
        name.innerHTML = user.name
        let created = document.createElement('div')
        created.id="created"
        created.innerHTML = user.created_at
        let location = document.createElement('div')
        location.id="location"
        location.innerHTML = user.location
        let followers = document.createElement('span')
        followers.id="followers"
        followers.innerHTML = user.followers
        let following = document.createElement('span')
        following.id="following"
        following.innerHTML = user.following
        let public_repos = document.createElement('span')
        public_repos.id="public_repos"
        public_repos.innerHTML = user.public_repos
        let public_gists = document.createElement('span')
        public_gists.id="public_gists"
        public_gists.innerHTML = user.public_gists

        info.appendChild(name)
        info.appendChild(created)
        info.appendChild(location)
        info.appendChild(followers)
        info.appendChild(following)
        info.appendChild(public_repos)
        info.appendChild(public_gists)
        article.appendChild(img)
        article.appendChild(info)
        main.appendChild(title1)
        main.appendChild(article)

        let title2 = document.createElement('h2')
        title2.innerHTML = "Repositories"
        let repositoris = document.createElement('div')
        repositoris.classList.add('repositoris')

        let repos = await getRepos(user["login"]);
        // console.log(repos);
        repos.forEach(repo => {
            console.log(repo.full_name,
                repo.forks_count,
                repo.stargazers_count,
                repo.html_url,
                repo.language,
                repo.watchers_count,
                repo.description);
            let d = new Date(repo.updated_at);
            month = monthNames[d.getMonth()]
            day = d.getDate()

            let sec1 = document.createElement('section')
            sec1.classList.add('repo');

            let title3 = document.createElement('div')
            title3.classList.add('title')

            let name = document.createElement('a')
            name.href = repo.html_url
            name.innerHTML = repo.full_name
            name.target = '_blank'

            title3.appendChild(name)

            let desc = document.createElement('div')
            desc.classList.add("disc");
            desc.innerHTML = repo.description

            let footer = document.createElement('footer')
            let span1 = document.createElement('span')
            span1.classList.add("lang");

            let spanTemp = document.createElement('span')
            spanTemp.classList.add("code-circle")
            span1.appendChild(spanTemp);
            span1.innerHTML = repo.language

            let span2 = document.createElement('span')
            span2.classList.add("stars")
            // span2.innerHTML = `<svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg> ${repo.stargazers_count}`
            
            let span3 = document.createElement('span')
            span3.classList.add('updated')
            span3.innerHTML = `${month} ${day}`

            footer.appendChild(span1, span2, span3)
            sec1.appendChild(title3)//, desc, footer
            repositoris.appendChild(sec1)
        })

        // console.log(repositoris)
        main.appendChild(title2)
        main.appendChild(repositoris)
        // localstorage.setItem("name", user["login"]);
    })
})

// git.click();

