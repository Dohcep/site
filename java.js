document.querySelector('#fetch-dog').addEventListener('click', async () => {
    refreshdog()
})




async function refreshdog() {
    var fetchResult = await fetch('https://random.dog/woof.json')
    var data = await fetchResult.json()

    if (data.url.includes('.mp4')) {
        refreshdog()
        return
    }
document.querySelector('#img-dog').src = data.url
}
refreshdog()