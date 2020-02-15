

extension Sequence where Element: AdditiveArithmetic {
    func sum() -> Element { reduce(.zero, +) }
}
let numbers = [1,2,3]
numbers.sum()

//https://www.discogs.com/artist/7662263-Borna-Libertines

// Complete the compareTriplets function below.
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
