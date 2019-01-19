package main

import "fmt"

func main() {
	// V11 Variadic functions

	// // V10 Array
	// var a [3]int
	// a[0] = 12
	// a[1] = 78
	// a[2] = 50
	// fmt.Println(a)
	// // auto length
	// a2 := [...]int{12, 78}
	// // a2 := [3]int{12}
	// // a2 := [3]int{12, 78, 50}
	// fmt.Println(a2)
	// // value type
	// b := [...]string{"USA", "France", "UK"}
	// c := b
	// b[0] = "Singapore"
	// fmt.Println(b)
	// fmt.Println(c)
	// // local vs in function
	// num := [...]int{1, 2, 3}
	// fmt.Println("Before calling changeLocal", num)
	// changeLocal(num)
	// fmt.Println("After calling changeLocal", num)
	// // length
	// x := [...]int{1, 2, 3, 4}
	// fmt.Println("Length of x:", len(x))
	// for i := 0; i < len(x); i++ {
	// 	fmt.Printf("%d index of x is %d\n", i, x[i])
	// }
	// // range
	// for i, v := range a {
	// 	fmt.Printf("%d index of a is %d\n", i, v)
	// }
	// for _, v := range a {
	// 	fmt.Printf(" %d\n", v)
	// }
	// // multi dimension array
	// animal := [3][2]string{
	// 	{"lion", "tiger"},
	// 	{"cat", "dog"},
	// 	{"pigeon", "peacock"},
	// }
	// var brands [3][2]string
	// brands[0][0] = "Apple"
	// brands[0][1] = "Samsung"
	// brands[1][0] = "Microsoft"
	// brands[1][1] = "Google"
	// brands[2][0] = "AT&T"
	// brands[2][1] = "T-Mobile"
	// printArray(animal)
	// fmt.Printf("\n")
	// printArray(brands)
	// // Slices
	// d := [5]int{76, 77, 78, 79, 80}
	// var e = d[1:4]
	// // var e []int = d[1:4]
	// fmt.Println(e)
	// f := []int{6, 7, 8}
	// fmt.Println(f)
	// // Operate
	// darr := [...]int{57, 89, 90, 82, 100, 78, 67, 69, 59}
	// dslice := darr[2:5]
	// fmt.Println("array before", darr)
	// for dslice_i := range dslice {
	// 	dslice[dslice_i]++
	// }
	// fmt.Println("array after", darr)
	// // slices impact on array
	// numa := [3]int{78, 79, 80}
	// nums1 := numa[:] //creates a slice which contains all elements of the array
	// nums2 := numa[:]
	// fmt.Println("array before change 1", numa)
	// nums1[0] = 100
	// fmt.Println("array after modification to slice nums1", numa)
	// nums2[1] = 101
	// fmt.Println("array after modification to slice nums2", numa)
	// // len vs cap
	// fruitarray := [...]string{"apple", "orange", "grape", "mango", "water melon", "pine apple", "chikoo"}
	// fruitslice := fruitarray[1:3]
	// fmt.Printf("length of slice %d capacity %d\n", len(fruitslice), cap(fruitslice)) //length of is 2 and capacity is 6
	// fruitslice = fruitslice[:cap(fruitslice)]                                        //re-slicing furitslice till its capacity
	// fmt.Println("After re-slicing length is", len(fruitslice), "and capacity is", cap(fruitslice))
	// // make
	// pouet := make([]int, 5, 5)
	// fmt.Println(pouet)
	// // under the hood
	// cars := []string{"Ferrari", "Honda", "Ford"}
	// fmt.Println("cars:", cars, "has old length", len(cars), "and capacity", cap(cars)) //capacity of cars is 3
	// cars = append(cars, "Toyota")
	// fmt.Println("cars:", cars, "has new length", len(cars), "and capacity", cap(cars)) //capacity of cars is doubled to 6
	// cars = append(cars, "Renault", "Peugeot", "Citroen", "BMW")
	// fmt.Println("cars:", cars, "has new length", len(cars), "and capacity", cap(cars)) //capacity of cars is doubled to 6
	// // nil?
	// var names []string
	// if names == nil {
	// 	fmt.Println("slice is nil going to append")
	// 	names = append(names, "John", "Sebastian", "Vinay")
	// 	fmt.Println("names contents:", names)
	// }
	// // concat
	// veggies := []string{"potatoes", "tomatoes", "brinjal"}
	// fruits := []string{"oranges", "apples"}
	// food := append(veggies, fruits...)
	// fmt.Println("food:", food)
	// // pass to functions
	// nos := []int{8, 7, 6}
	// fmt.Println("slice before function call", nos)
	// subtactOne(nos)                               //function modifies the slice
	// fmt.Println("slice after function call", nos) //modifications are visible outside
	// // multi dimensional slices
	// pls := [][]string{
	// 	{"C", "C++"},
	// 	{"JavaScript"},
	// 	{"Go", "Rust"},
	// }
	// for _, v1 := range pls {
	// 	for _, v2 := range v1 {
	// 		fmt.Printf("%s ", v2)
	// 	}
	// 	fmt.Printf("\n")
	// }
	// // memory management
	// countriesNeeded := countries()
	// fmt.Println(countriesNeeded)

	// // V9 switch
	// // finger := 4
	// switch finger := 8; finger {
	// case 1:
	// 	fmt.Println("Thumb")
	// case 2:
	// 	fmt.Println("Index")
	// case 3:
	// 	fmt.Println("Middle")
	// case 4:
	// 	fmt.Println("Ring")
	// case 5:
	// 	fmt.Println("Pinky")
	// default:
	// 	fmt.Println("Incorrect finger")
	// }
	// // multiple case
	// switch letter := "i"; letter {
	// case "a", "u", "i", "e", "o":
	// 	fmt.Println("Vowel")
	// default:
	// 	fmt.Println("Not a vowel")
	// }
	// // omitted expression
	// x := 42
	// switch {
	// case x < 50:
	// 	fmt.Println("Haha")
	// default:
	// 	fmt.Println("Hoho")
	// }
	// // fallthrough
	// switch num := number(); {
	// case num < 50:
	// 	fmt.Printf("%d is lesser than 50\n", num)
	// 	fallthrough
	// case num < 100:
	// 	fmt.Printf("%d is lesser than 100\n", num)
	// 	fallthrough
	// case num < 200:
	// 	fmt.Printf("%d is lesser than 200\n", num)
	// }

	// // V8: Loops
	// for i := 1; i <= 10; i++ {
	// 	if i > 5 {
	// 		break
	// 	}
	// 	if i%2 == 0 {
	// 		continue
	// 	}
	// 	fmt.Printf(" %d", i)
	// }
	// fmt.Printf("\n")
	// // Shorthand
	// j := 0
	// for j <= 10 {
	// 	fmt.Printf("%d ", j)
	// 	j += 2
	// }
	// fmt.Printf("\n")
	// // Double loop?
	// for no, i := 10, 1; i <= 10 && no <= 19; i, no = i+1, no+1 {
	// 	fmt.Printf("%d * %d = %d\n", no, i, no*i)
	// }

	// // V7: if else
	// // num := 10
	// if num := 10; num%2 == 0 {
	// 	fmt.Println("Even number")
	// } else {
	// 	fmt.Println("Odd number")
	// }

	// V6: Packages

	// // V5: functions
	// var bill = calcBill(5, 3)
	// fmt.Println("bill:", bill)
	// area, perim := rectProps(10.8, 5.6)
	// fmt.Printf("Area %f Perimeter %f\n", area, perim)
	// area2, perim2 := rectPropsNamed(10.8, 5.6)
	// fmt.Printf("Area %f Perimeter %f", area2, perim2)
	// a, _ := rectProps(10.8, 5.6)
	// fmt.Println("Area:", a)

	// // V4: constants
	// const hello = "Hello Go!"
	// var name = "Sam"
	// fmt.Printf("type %T value %v\n", name, name)
	// fmt.Printf("type %T value %v", hello, hello)
	// // type mixing
	// // var defaultName = "Sam" //allowed
	// // type myString string
	// // var customName myString = "Sam" //allowed
	// // customName = defaultName        //not allowed
	// const a = 5
	// var intVar = a
	// var int32Var int32 = a
	// var float64Var float64 = a
	// var complex64Var complex64 = a
	// fmt.Println("intVar", intVar, "\nint32Var", int32Var, "\nfloat64Var", float64Var, "\ncomplex64Var", complex64Var)

	// // V3: types
	// a, b := true, false
	// c, d := a && b, a || b
	// fmt.Println("a:", a, "b:", b, "c:", c, "d:", d)
	// // type & size
	// var e = 89
	// f := 95
	// fmt.Println("e:", e, "f:", f)
	// fmt.Printf("e (%T) size: %d\nf (%T) size: %d", e, unsafe.Sizeof(e), f, unsafe.Sizeof(f))
	// // integer / floating
	// g, h := 5.67, 8.97
	// fmt.Printf("type of a %T b %T\n", f, g)
	// sum := g + h
	// diff := g - h
	// fmt.Println("sum", sum, "diff", diff)
	// i, j := 56, 89
	// fmt.Println("sum", i+j, "diff", i-j)
	// // complex
	// k, l := 6+7i, complex(6, 7)
	// cadd := k + l
	// fmt.Println("sum:", cadd)
	// cmul := k * l
	// fmt.Println("product:", cmul)
	// // string
	// first := "Naveen"
	// last := "Ramanathan"
	// name := first + " " + last
	// fmt.Println("My name is", name)
	// // type conversion
	// m, n := 55, 67.8
	// o := m + int(n)
	// p := float64(m) + n
	// fmt.Println("o:", o, "p:", p)

	// V2: variable
	// // var age int
	// var age = 42
	// fmt.Println("My age is", age)
	// age = 29
	// fmt.Println("My age is", age)
	// age = 54
	// fmt.Println("My age is", age)
	// // var width, height int = 100, 50
	// var width, height = 100, 50
	// fmt.Println("width is", width, "height is", height)
	// // Global declaration
	// var (
	// 	name    = "Pouet"
	// 	address = "trou du cul du monde"
	// 	partner string
	// )
	// fmt.Println("Name", name, "is living", address, "with", partner)
	// partner = "Plop"
	// fmt.Println("Name", name, "is living", address, "with", partner)
	// // Shorthand
	// firstName, lastName := "toto", "Pouet"
	// fmt.Println("Fullname is", firstName, lastName)
	// firstName, middleName := "Toto", "De"
	// fmt.Println("Fullname is", firstName, middleName, lastName)
	// // Math
	// a, b := 7.2, 5.0
	// c := math.Min(a, b)
	// fmt.Println("Min is", c)

	// V1: helloworld
	// fmt.Println("Hello World")
}

func calcBill(price, qty int) int {
	return price * qty
}

func rectProps(length, width float64) (float64, float64) {
	return length * width, 2 * (length + width)
}

func rectPropsNamed(length, width float64) (area, perimeter float64) {
	area = length * width
	perimeter = 2 * (length + width)
	return
}

func number() int {
	return 15 * 5
}

func changeLocal(num [3]int) {
	num[0] = 42
	fmt.Println("Inside changeLocal func", num)
}

func printArray(a [3][2]string) {
	for _, v1 := range a {
		for _, v2 := range v1 {
			fmt.Printf("%s ", v2)
		}
		fmt.Printf("\n")
	}
}

func subtactOne(numbers []int) {
	for i := range numbers {
		numbers[i] -= 2
	}
}

func countries() []string {
	countries := []string{"USA", "Singapore", "Germany", "India", "Australia"}
	neededCountries := countries[:len(countries)-2]
	countriesCpy := make([]string, len(neededCountries))
	copy(countriesCpy, neededCountries) //copies neededCountries to countriesCpy
	return countriesCpy
}
