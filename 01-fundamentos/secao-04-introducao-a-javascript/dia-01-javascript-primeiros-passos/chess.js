let chessPiece = "Cavalo";

switch (chessPiece.toLowerCase()) {
  case "bispo":
    console.log("Bispo: diagonal.");
    break;
  case "cavalo":
    console.log("Cavalo: andar em 'L', pode pular peças.");
    break;
  case "peão":
    console.log("Peão: apenas uma casa para frente, duas casas no primeiro movimento.");
    break;
  case "rainha":
    console.log("Rainha: diagonal, horizontal e vertical.");
    break;
  case "rei":
    console.log("Rei: apenas uma casa para qualquer direção.");
    break;
  case "torre":
    console.log("Torre: horizontal e vertical.");
    break;
  default:
    console.log("Peça inválida!");
    break;
}