

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

synth punk, garage psych, chamber psych,cyberpunk, big beat, electronic, postpunk, avangard, synth punk, garage psych,  cyberpunk, big beat



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


// Complete the plusMinus function below.
func plusMinus(arr: [Int]) -> Void {
// Initialize counters
var positiveCount = 0.0
var negitiveCount = 0.0
var zeroCount = 0.0
// Score integers
for int in arr {
    if int > 0 {
        positiveCount += 1.0
    } else if int < 0 {
        negitiveCount += 1.0
    } else {
        zeroCount += 1.0
    }
}
var total =  positiveCount + negitiveCount + zeroCount
// Get fractions
var percentPositive = positiveCount / total
var percentNegitive = negitiveCount / total
var percentZero = zeroCount / total

// Output fractions
print("\(percentPositive)\n\(percentNegitive)\n\(percentZero)")
}

extension Array {
  func getObject(at index: Int) -> Element? {
    let isValid = index >= 0 && index < count
    return isValid ? self[index] : nil
  }
}
let obj = [3,9,27].getObject(at: 3)
print(obj) //prints nil


import UIKit
class ImageCache {

  static let shared = ImageCache()
  private let session: URLSession


  private let cache: NSCache<NSString,UIImage> = NSCache()

  private init(session: URLSession = .shared) {
    self.session = session
  }

  func addImage(key:NSString, image:UIImage) {
    self.cache.setObject(image, forKey: key)
  }
  func getImage(key:NSString) -> UIImage? {
    return self.cache.object(forKey: key)
  }

  func fetchImage(url:URL, callback:@escaping (_ image:UIImage?)->()) {

    let aImage = getImage(key: url.absoluteString as NSString)

    if aImage != nil{

      DispatchQueue.main.async {
        callback(aImage)
      }

    }else{
      session.dataTask(with: url) { (data, response, error) in

        guard
          let httpURLResponse = response as? HTTPURLResponse, httpURLResponse.statusCode == 200,
          let mimeType = response?.mimeType, mimeType.hasPrefix("image"),
          let data = data, error == nil,
          let image = UIImage(data: data)
          else {
            DispatchQueue.main.async {
              callback(nil)
            }
            return
        }
        self.addImage(key: url.absoluteString as NSString, image: image)
        DispatchQueue.main.async {
          callback(image)
        }
        }.resume()

    }
  }
}

enum Direction: CaseIterable {
    case north
    case south
    case east
    case west
}
Direction.allCases //[north, south, east, west]
Direction.allCases.count //4

func mergeString(a: String, and b: String) -> String {
    // base case
    if (a.isEmpty || b.isEmpty) {
      return a + b
    }

    // convert to char array
    var aArr = Array(a).map { String($0) }
    var bArr = Array(b).map { String($0) }

    // make two array the same length
    let diff = abs(aArr.count - bArr.count)
    let holders = Array.init(repeating: "", count: diff)
    if aArr.count > bArr.count {
      bArr.append(contentsOf: holders)
    } else {
      aArr.append(contentsOf: holders)
    }

    let result = zip(aArr, bArr)
      .compactMap { $0 }
      .map { $0.0 + $0.1 }
      .reduce("", +)

    return result
  }
//usage:
let res =  mergeString(a: "abc", and: "def")
print(res)
//prints adbecf


public enum Result<Success, Failure: Error> {
    case success(Success), failure(Failure)
}
URLSession.shared.dataTask(with: url) { (result: Result<(response: URLResponse, data: Data), Error>) in
    switch result {
    case let .success(success):

    case let .error(error):

    }
}
assert() code runs only in debug mode, the time when you and writing, debugging development your code. If assert condition is met, your code will crash in debug builds.
func printAmount(_ amount: Int) {
    guard amount >= 0 else {
      assert(amount >= 0, "Amount must be a positive number")
      return
    }
    print("Amount is: ", amount)
  }

printAmount(-2)

enum Direction: CaseIterable {
    case north
    case south
    case east
    case west
}
Direction.allCases //[north, south, east, west]
Direction.allCases.count //4

let numbers = [1, 2, 3, 4]
let numberSum = numbers.reduce(0, { $0 + $1})

DispatchQueue.global(qos: .default).async {
    sleep(10)
    DispatchQueue.main.async {
        self.alert.text = "Waiting over"
    }
}
