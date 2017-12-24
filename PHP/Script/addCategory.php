<?php
if(isset($_POST['addCategory'])){
  include $_ind . 'PHP/Inc/func.php';

  $cat = htmlspecialchars(trim($_POST['category']));
  $correct = true;

  if(!preg_match('/^[a-z0-9àâçéèêëîïôûùüÿñæœ -]*$/i', $cat)) {
      $correct = false;
      bootstrapNotify('Erreur: Seul les lettres, tirets et les espaces sont autorise');
  }

  if($correct){
    $add = $db->prepare('INSERT INTO categories (name, createdAt) VALUES(?, NOW())');
    if($add->execute(array($cat))){
      bootstrapNotify('Success! Produit ajoute', 'success');
    }
    else {
      bootstrapNotify();
    }
  }
}
