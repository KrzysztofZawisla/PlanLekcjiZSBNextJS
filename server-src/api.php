<?php
  // connected lesson plans with links to zsbrybnik
  $link_association = array(
    "1ba" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o16.html",
    "1wa" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o17.html",
    "1ga" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o18.html",
    "1ia" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o19.html",
    "1ka" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o20.html",
    "1ba8" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o21.html",
    "1aw8" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o22.html",
    "1ga8" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o23.html",
    "1ia8" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o24.html",
    "1w8" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o25.html",
    "2w" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o15.html",
    "2wa" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o14.html",
    "2ib" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o13.html",
    "2ia" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o12.html",
    "2ga" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o11.html",
    "2ba" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o10.html",
    "3gi" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o9.html",
    "3ib" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o8.html",
    "3ia" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o7.html",
    "3ba" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o6.html",
    "4gi" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o5.html",
    "4ib" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o4.html",
    "4ia" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o3.html",
    "4bb" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o2.html",
    "4ba" => "https://zsbrybnik.pl/pliki/plany/plan_lekcji/plany/o1.html",
  );

  require_once("simple_html_dom.php");
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: text/html; charset=UTF-8");
  $table_styles =
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
    height: 50px;
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
  $html = "";
  $request_method = $_SERVER["REQUEST_METHOD"];
  if($request_method == "GET") {
    if(isset($_GET["class"]) && $_GET["class"] != "") {
      $class = $_GET["class"];
      foreach($link_association as $key => $link) {
        if($key == $class) {
          $html = file_get_html($link);
        }
      }
      if($html != "") {
        foreach ($html->find('a') as $element) {
          $element->href = "#";
        }
        $htmlReturn = $html->find("table", 1)->find("tr", 0);
        echo $htmlReturn.$table_styles;
      } else {
        echo "Nie odnaleziono planu lekcji";
      }
    } else if($html == "") {
      echo "Nie odnaleziono planu lekcji";
    }
  }
?>
