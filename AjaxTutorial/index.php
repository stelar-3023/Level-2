<?php
include "dbh.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous">
  </script>
  <script>
    // jQuery code here
    $(document).ready(function() {
      let commentCount = 1;
      $("button").click(function() {
        commentCount = commentCount + 1;
        $("#comments").load("load-comments.php", {
          commentNewCount: commentCount
        });
      });
    });
  </script>
  <meta </head>

<body>
  <div id="comments">
    <?php
    $sql = "SELECT * FROM COMMENTS LIMIT 1";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
      while ($row = mysqli_fetch_assoc($result)) {
        echo "<p>";
        echo $row["AUTHOR"];
        echo "<br>";
        echo $row["MESSAGE"];
        echo "</p>";
      }
    } else {
      echo "There are no comments!";
    }
    ?>
  </div>
  <button>
    Show more comments
  </button>

</body>

</html>