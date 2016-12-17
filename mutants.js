var killedMutants = [
    {num:"1",line:"24",mutation:"Mutant: if (a != b) {"},
    {num:"2",line:"27",mutation:"Mutant: if (a != c) {"},
    {num:"3",line:"30",mutation:"Mutant: if (b != c) {"}
  ]

var liveMutants = [
    {num:"4",line:"45",mutation:"Mutant: } else if (trian != 2 && a + c > b) {"},
    {num:"5",line:"45",mutation:"Mutant: } else if (trian == 2 || a + c > b) {"},
    {num:"6",line:"45",mutation:"Mutant: } else if (trian == 2 && a + c < b) {"}
  ]

var uncoveredMutants = [
    {num:"7",line:"48",mutation:"Mutant: else if (trian != 3 && a + c > b) {"},
    {num:"8",line:"48",mutation:"Mutant: else if (trian == 3 || a + c > b) {"},
    {num:"9",line:"48",mutation:"Mutant: else if (trian == 3 && a + c < b) {"}
  ]
