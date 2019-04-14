<?php
  require_once("simple_html_dom.php");
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: text/html; charset=UTF-8");
  $tableStyles =
  "<style>
  .tabela {
    box-sizing: border-box;
    width: 100%;
    font-size: 2.2vw;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    .tabela {
      font-size: 2.2vh;
    }
  }
  .tabela th, td {
    padding: 2.5px;
    width: auto;
    text-align: center;
    border: .5px solid #e05416;
  }
  .tabela a {
    color: black;
    text-decoration: none;
    pointer-events: none;
    cursor: default;
  }
  </style>";
  $request_method = $_SERVER["REQUEST_METHOD"];
  if($request_method == "GET") {
    if(isset($_GET["klasa"]) && $_GET["klasa"] != "") {
      $klasa = $_GET["klasa"];
      if($klasa == "1ba") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o15.html");
      } elseif($klasa == "1ga") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o16.html");
      } elseif($klasa == "1ia") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o17.html");
      } elseif($klasa == "1ib") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o18.html");
      } elseif($klasa == "1wa") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o19.html");
      } elseif($klasa == "1w") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o20.html");
      } elseif($klasa == "2ia") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o12.html");
      } elseif($klasa == "2ib") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o13.html");
      } elseif($klasa == "2ba") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o11.html");
      } elseif($klasa == "2gi") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o14.html");
      } elseif($klasa == "3ba") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o5.html");
      } elseif($klasa == "3bb") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o6.html");
      } elseif($klasa == "3ia") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o7.html");
      } elseif($klasa == "3ib") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o8.html");
      } elseif($klasa == "3gi") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o9.html");
      } elseif($klasa == "3w") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o10.html");
      } elseif($klasa == "4ba") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o1.html");
      } elseif($klasa == "4bb") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o2.html");
      } elseif($klasa == "4ga") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o3.html");
      } elseif($klasa == "4ia") {
        $html = file_get_html("http://www.zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o4.html");
      }
      foreach($html->find('a') as $element) {
        $element->href = "#";
      }
      $htmlReturn = $html->find("table", 1)->find("tr", 0);
      echo $htmlReturn.$tableStyles;
    } else if($_GET["klasa"] == "") {
      echo "Błędne zapytanie";
    }
  }
?>
