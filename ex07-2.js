sealed trait Algebra
case class Add(x: Int, y: Int) extends Algebra

def eval(a: Add): Int =
  a.x + a.y

println(eval(new Add(1,2)) == 3)
println(eval(new Add(2,3)) == 5)
