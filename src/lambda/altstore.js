import fetch from "node-fetch"

const latest_release_url = "https://api.github.com/repos/mariolopjr/ppsspp-builder/releases/latest"

exports.handler = async (event, context) => {
  return fetch(latest_release_url, {
    method: "GET",
  })
    .then(res => res.json())
    .then(json => {
      const release_ipa = json["assets"].filter(el => {
        return el.content_type == "application/octet-stream"
      })

      const data = {
        name: "techmunchies AltStore Apps",
        identifier: "net.techmunchies.altstore",
        sourceURL: "https://techmunchies.net/.netlify/functions/altstore",
        apps: [
          {
            name: "PPSSPP",
            bundleIdentifier: "org.ppsspp.ppsspp",
            developerName: "Henrik Rydgård",
            version: json["name"],
            versionDate: json["published_at"],
            versionDescription: json["name"],
            downloadURL: release_ipa[0]["browser_download_url"],
            localizedDescription: "PPSSPP can run your PSP games on your iPhone and iPad in full HD resolution. It can even upscale textures that would otherwise be too blurry as they were made for the small screen of the original PSP. Even on modern iPhones and iPads, you can often run at double the original resolution.",
            iconURL: "https://github.com/mariolopjr/ppsspp-builder/raw/master/org.ppsspp.ppsspp.png",
            tintColor: "018084",
            size: release_ipa[0]["size"],
            screenshotURLs: [
              "https://www.ppsspp.org/img/screens/small/Final_Fantasy_Type-0_-_Drayano.jpg",
              "https://www.ppsspp.org/img/screens/small/monsterhunterfreedomunite.jpg",
              "https://www.ppsspp.org/img/screens/small/littlebigplanet.jpg"
            ],
          }
        ],
        news: [
          {
            title: "Added PPSSPP to techmunchies AltStore!",
            identifier: "psspp-altstore-available",
            caption: "An easy to use AltStore repo for PPSSPP (and future apps, maybe?)",
            tintColor: "228B22",
            imageURL: "",
            appID: "org.ppsspp.ppsspp",
            date: "2020-09-24",
            notify: false
          },
        ],
        userInfo: {}
      }

      return {
        statusCode: 200,
        body: JSON.stringify(data)
      }
    })
    .catch(error => ({
      statusCode: 422,
      body: `Oh NO! There was an error: ${error}`
    }))
}