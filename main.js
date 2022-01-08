const linksSocialMedia = {
  github: 'LeandroMVieira',
  youtube: 'ENOQUEEELIAS1',
  facebook: 'profile.php?id=100045456832912',
  instagram: 'leandro.m_vieira',
  twitter: '@spiiderr'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userProfilePhoto.src = data.avatar_url
      login.textContent = data.login
    })
}

getGithubProfileInfos()
