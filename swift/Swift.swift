

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

extension Array {
    func chunked(into size: Int) -> [[Element]] {
        return stride(from: 0, to: count, by: size).map {
            Array(self[$0..<Swift.min($0 + size, count)])
        }
    }
}
extension Array where Element: Equatable {
    // Remove first collection element that is equal to the given `object`:
    mutating func remove(object: Element) {
        guard let index = firstIndex(of: object) else {return}
        remove(at: index)
    }

}

// Closure take no parameter and return nothing
let sayHello: () -> Void = {
    print("Hello")
}

sayHello()

// Closure take one parameter and return 1 parameter
let value: (Int) -> Int = { (value1) in
    return value1
}

print(value(5))

// Closure take two parameter and return 1 parameter
let add: (Int, Int) -> Int = { (value1, value2) in
    return value1 + value2
}

print(add(5, 4))

// Closure take two parameter and return String parameter
let addValues: (Int, Int) -> String = { (value1, value2) -> String in
    return String("Sum is: \(value1 + value2)")
}

print(addValues(5, 4))

//Trailing Closure
//Closure as an argument to method call
func makeSquareOf(digit: Int, onComplition:(Int) -> Void ){
  let squaredig = digit * digit
  onComplition(squaredig)
}
makeSquareOf(digit: 10, onComplition: { square in
  print("Square 10 is \(square)")
})

//
let digitsList = [1, 2, 3, 4, 5]

let sum = digitsList.reduce(0) { $0 + $1 }
print(sum)

//Capturing Values
func makeIncrementer(forIncrement amount: Int) -> () -> Int {
    var runningTotal = 0
    func incrementer() -> Int {
        runningTotal += amount
        return runningTotal
    }
    return incrementer
}
let incrementByTen = makeIncrementer(forIncrement: 10)
incrementByTen() // returns a value of 10
incrementByTem() // returns  a value of 20

class CaptureList: NSObject {
    let digit = 5

    override init() {
        super.init()

        makeSquareOfValue { [digit] squareDigit in
            print("Square of \(digit) is \(squareDigit)")
        }
    }

    func makeSquareOfValue(onCompletion: (Int) -> Void) {
        let squareDigit = digit * digit
        onCompletion(squareDigit)
    }
}

CaptureList()

class CaptureList: NSObject {
    let digit = 5
    typealias onCompletionHandler = (Int) -> Void

    override init() {
        super.init()

        makeSquareOfValue { [digit] squareDigit in
            print("Square of \(digit) is \(squareDigit)")
        }
    }

    func makeSquareOfValue(onCompletion: onCompletionHandler) {
        let squareDigit = digit * digit
        onCompletion(squareDigit)
    }
}

CaptureList()


let inferredClosure = {(x:Int,y:Int)->Int in x + y }inferredClosure(1,99) // result is 100

let inferredReturnTypeClosure = {(number:Int) in number*number }

let callStringWtihClosure: () -> String = { () in return “hello”}
print(callStringWtihClosure()) // prints “hello”

let callStringWtihClosure: () -> String = {return “hello”}

let callStringWithClosureWithoutType = { “hi, I’m a closure too” }

// return a closure from a function
var addClosure:(Int,Int)->Int = { $0 + $1 }
func returnClosure() -> (Int,Int)->Int {return addClosure}
//returnClosure()(10,20)
// returns 30
var returnedClosure = returnClosure()
// returns a closure of type (Int,Int)->Int
returnedClosure(20,10) // returns 30

let setupViewUsingClosure = { () -> UIView inlet view = UIView()view.backgroundColor = .greenreturn view}
let someOtherView = setupViewUsingClosure() // returns a green view

let setupViewUsingClosure: UIView = {let view = UIView()view.backgroundColor = .greenreturn view}()


func doSomething(number:Int,onSuccess closure:(Int)->Void) {
  closure(number * number * number)
}
  doSomething(number: 100) { (numberCube) in
  print(numberCube) // prints  1000000
  }


  // capturing values
  var i = 0
  var closureArray = [()->()]()
  for _ in 1…5 {
  closureArray.append {
    print(i)
  }
    i += 1
    }
    // here i will be 5
    closureArray[0]() // prints 5
    closureArray[1]() // prints 5
    closureArray[2]() // prints 5
    closureArray[3]() // prints 5
    closureArray[4]() // prints 5


    var closureArray2 = [()->()]()
    var j = 0for _ in 1…5 {
    closureArray2.append { [j] in
    print(j)
    }
    j += 1
    }// here i will be 5
    closureArray2[0]() // prints 0
    closureArray2[1]() // prints 1
    closureArray2[2]() // prints 2
    closureArray2[3]() // prints 3
    closureArray2[4]() // prints 4

    closure.append { [j,k,l] inprint("\(j) \(k) \(l)")}
    closure.append { [a = j, b = k, c = l] in
    print("\(j) \(k) \(l)")
    }

    An escaping closure is a closure that’s called after the function it was passed to returns. In other words, it outlives the function it was passed to.
A non-escaping closure is a closure that’s called within the function it was passed into, i.e. before it returns.


func someFunctionWithNonescapingClosure(closure: () -> Void) {closure()}
func someFunctionWithEscapingClosure(completionHandler: @escaping () -> Void) {completionHandler()}
class SomeClass {
var x = 10
func doSomething() {
someFunctionWithEscapingClosure { self.x = 100 }
someFunctionWithNonescapingClosure { x = 200 }
}
}




class InterviewTest {
var name: String = “Abhilash”
lazy var greeting : String = {return “Hello \(self.name)”}()
}
//-------------------------
let testObj = InterviewTest()testObj.greeting // result is Hello Abhilash

The lazy var greeting is returning a string by accessing the local variable name from the class InterviewTest . We cannot directly access the variable. We have to use self keyword to do that. But as explained, by default, a closure keeps a strong reference of the variable captured. It may cause reference cycles.

    We can break this strong reference cycle using self in the capture list with either a weak or an unowned reference.

weak

A weak reference is a reference that does not keep a strong hold on the instance it refers to, and so does not stop ARC from disposing of the referenced instance. This behavior prevents the reference from becoming part of a strong reference cycle.

Since a weak reference may be nil, the variable captured becomes optional. Therefore, we should use a guard to safely unwrap it:

lazy var greeting : String = { [weak self] in
guard let strongSelf = self else { return “” }
return “Hello \(strongSelf.name)”
}()

Unowned

Like a weak reference, an unowned reference does not keep a strong hold on the instance it refers to. Unlike a weak reference, however, an unowned reference is used when the other instance has the same lifetime or a longer lifetime

lazy var greeting : String = { [unowned self] in
return “Hello \(self.name)”
}()

This means that we should use unowned just when we are sure that the reference will never be nilinside the closure, otherwise the app would crash. So, guard check is not required here.

We can use weak and unowned with any variable in the capture list and we can also combine with the aliases:

lazy var greeting : String = { [unowned unownedSelf = self] in
 return “Hello \(unownedSelf.name)”
}()

class Human {
  var firstName: String
  var lastName: String
  lazy var fullName:(String) -> String = { [unowned self] titlePrefix in
    return "\(titlePrefix).\(firstName) \(lastName)"

  }
  init(firstName: String, var lastName: String){
    self.firstName = firstName
    self.lastName = lastName
  }
  deimy{
    print("de-allocating the human obj")

  }
}

var humanObj: Human? = Human(firstName: Borna, lastName: libertines)
let fullName = humanObj?.fullName("Mr")
humanObj = nil



var customersInLine = [“Chris”, “Alex”, “Ewa”, “Barry”, “Daniella”]
print(customersInLine.count)
// Prints “5”
let customerProvider = { customersInLine.remove(at: 0) }
// this is of type ()->String
print(customerProvider()) // prints Chris.. the remove(at:) returns a String.

func serve(customer customerProvider: () -> String) {
  print("Now serving \(customerProvider())!")
}
serve(customer: { customersInLine.remove(at: 0) } ) // we cannot omit {}
// Prints "Now serving Alex!"

//@autoclosure
func serve(customer customerProvider: @autoclosure () -> String) {
  print("Now serving \(customerProvider())!")
}
serve(customer: customersInLine.remove(at: 0))// Prints "Now serving Ewa!"


extension UIView {

class func animate(withDuration duration: TimeInterval, _ animations: @escaping @autoclosure () -> Void) {
        UIView.animate(withDuration: duration, animations: animations)
    }

}
UIView.animate(withDuration: 2.5) {
    self.view.backgroundColor = .orange
}
UIView.animate(withDuration: 2.5, self.view.backgroundColor = .orange)


func staircase(n: Int) -> Void {
    var stairs = String()
    // iterate over range of 1 and n
    for step in (1...n).reversed() {
        // repeat \s and # accordingly
        stairs += String(repeating: " ", count: step - 1) + String(repeating: "#", count: n + 1 - step) + "\n"
    }
    print(stairs)

}
/*
#

##

###

####

#####

######
*/

func miniMaxSum(arr: [Int]) -> Void {
    let sorted = arr.sorted()

    let minSum = sorted.dropLast().reduce(0, +)
    let maxSum = sorted.dropFirst().reduce(0, +)

    print("\(minSum) \(maxSum)")

}


// DispatchGroup
func myFunction() {
    let array = [Object]()
    let group = DispatchGroup() // initialize

    array.forEach { obj in

        // Here is an example of an asynchronous request which use a callback
        group.enter() // wait
        LogoRequest.init().downloadImage(url: obj.url) { (data) in
            if (data) {
                group.leave() // continue the loop
            }
        }
    }

    group.notify(queue: .main) {
        // do something here when loop finished
    }
}

// long running operation
func longRunningOp(searchString: String, completion: (result: String) -> Void) {
    // call the completion handler/callback function
    completion(searchOp.result)
}
longRunningOp(searchString) {(result: String) in
    // do something with result
}



func birthdayCandles(ar: [Int]) -> Int {

    let max = ar.max()
    let count =  ar.filter{ $0 == max }.count

    return count
}
