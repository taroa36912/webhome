<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" href="../css_folder/inquiry.css"><!--css名変える-->
        <title>送信完了</title><!--1.タイトル-->
        <meta name="description" content="送信が完了しました"><!--2.説明文-->
        <meta name="keywords" content="送信完了"><!--3.キーワード-->
        <link rel="shortcut icon" href="../img\/Pac.ico" type="image/x-icon">
        <link rel="apple-touch-icon" href="../img/Pac.png" sizes="180x180">
        <link rel="icon" type="image/png" href="../img/Pac.png" sizes="192x192">
    </head>
    <body>
    <div class="wrap">
        <header>
            <iframe src="header.html" scrolling="no" frameborder="no" width="100%"></iframe>
        </header>
        <div class="main-body">
            <div class="left">
                <iframe src="leftmenu.html" scrolling="no" frameborder="no"></iframe>
            </div>
            <div class="arti">
                <h1>お問い合わせフォーム</h1>
                <a href=../index.html><img class="logo" src="../img/Pac.png"></a><p class="open_day">公開日 2023/09/26</p>
                <div class="php">
                <?php
                    mb_language("Japanese");
                    mb_internal_encoding("UTF-8");

                    $content = $_POST['content'];
                    $header = $_POST['from'];

                    if(mb_send_mail('yoyoyono.yo88893@gmail.com', 'お問い合わせ', $content, $header, "-f yoyoyono.yo88893@gmail.com")){
                        echo "メールを送信しました";
                    } else {
                        echo "メールの送信に失敗しました";
                    }
                ?>
                </div>
            </div>
            <div class="right">
                <iframe class="ri-i" src="rightmenu.html" scrolling="no" frameborder="no"></iframe>
            </div>
        </div>
        <footer>
            <iframe src="footer.html" scrolling="no" frameborder="no" width="100%"></iframe>
        </footer>
    </div>
    </body>
</html>