

extension Sequence where Element: AdditiveArithmetic {
    func sum() -> Element { reduce(.zero, +) }
}
let numbers = [1,2,3]
numbers.sum()

//https://www.discogs.com/artist/7662263-Borna-Libertines


func compareTriplets(a: [Int], b: [Int]) -> [Int] {

  var total = [0,0]

   for x in 0..<a.count {
      if a[x] > b[x] {
         total[0] += 1
      } else if a[x] < b[x] {
        total[1] += 1
      }
   }
   return  total
}

genres = {
    "genres": [ "acoustic", "afrobeat", "alt-rock", "alternative", "ambient", "anime", "black-metal", "bluegrass", "blues", "bossanova", "brazil", "breakbeat", "british", "cantopop", "chicago-house", "children", "chill", "classical", "club", "comedy", "country", "dance", "dancehall", "death-metal", "deep-house", "detroit-techno", "disco", "disney", "drum-and-bass", "dub", "dubstep", "edm", "electro", "electronic", "emo", "folk", "forro", "french", "funk", "garage", "german", "gospel", "goth", "grindcore", "groove", "grunge", "guitar", "happy", "hard-rock", "hardcore", "hardstyle", "heavy-metal", "hip-hop", "holidays", "honky-tonk", "house", "idm", "indian", "indie", "indie-pop", "industrial", "iranian", "j-dance", "j-idol", "j-pop", "j-rock", "jazz", "k-pop", "kids", "latin", "latino", "malay", "mandopop", "metal", "metal-misc", "metalcore", "minimal-techno", "movies", "mpb", "new-age", "new-release", "opera", "pagode", "party", "philippines-opm", "piano", "pop", "pop-film", "post-dubstep", "power-pop", "progressive-house", "psych-rock", "punk", "punk-rock", "r-n-b", "rainy-day", "reggae", "reggaeton", "road-trip", "rock", "rock-n-roll", "rockabilly", "romance", "sad", "salsa", "samba", "sertanejo", "show-tunes", "singer-songwriter", "ska", "sleep", "songwriter", "soul", "soundtracks", "spanish", "study", "summer", "swedish", "synth-pop", "tango", "techno", "trance", "trip-hop", "turkish", "work-out", "world-music" ]
}

 synth punk, garage psych, chamber psych,cyberpunk, big beat
electronic, postpunk, avangard, synth punk, garage psych,  cyberpunk, big beat

func aVeryBigSum(ar: [Int]) -> Int {
    let sum = ar.reduce(0, +)
    return sum
}
func diagonalDifference(arr: [[Int]]) -> Int {

    var n =  arr.count
    var primaryDiagonalSum = 0
    var secondaryDiagonalSum = 0

    for index in 0..<n {
        primaryDiagonalSum   +=  arr[index][index]
        secondaryDiagonalSum +=  arr[index][n-index-1]
    }

    let difference = abs(primaryDiagonalSum - secondaryDiagonalSum)
    return difference
}
