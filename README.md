# webhome
website

#サイトURL
https://pactures.com/


# サイト更新方法

## 大まかな流れ
### 1. 個人のブランチに更新をする
### 2. 他の人が承認し，サイトに反映される

## 細かい流れ
### 0. 初期設定(初回のみ)
a. vscodeにgit関連の拡張機能を入れる
b. vscodeのターミナル上でgitコマンドを使用できるようにする
c. ```git clone https://github.com/taroa36912/webhome.git```で，mainブランチをクローン
d. ```git switch -c ○○```(○○は名前)で，ブランチを作成
今後はここに各自更新をしていく(私以外の人の変更を私が確認してからpushできるようにするため)


# 始める前に，current directoryを，webhomeに移動しておく！！！

### 1. ブランチの移動
a. ```git pull origin main```で，最新状態に更新
b. ```git branch```で，ブランチを確認，自分のブランチがあることを確認する
c. ```git switch ○○```で，自分のブランチに移動する

### 2. 記事の追加
a. templeteディレクトリの，templete.htmlをコピーし，記事に関連するファイル名に変更し，pactureディレクトリに移動する
b. ファイル内の指示に従い，編集する. 適宜画像を追加したりする. 

### 3. 記事の追加2
a. templeteディレクトリの，l-templete.htmlをコピーし，記事に関連するファイル名に変更し，listディレクトリに移動する("l-"は残す)
b. ファイル内の指示に従い，編集する．list/l-imgに，サムネ画像を追加する

### 4. ローカルでの表示
a. 作成したファイルを, chromeやedgeなどにドラッグ&ドロップし, バグらずに表示されるかどうか確認する

### 5. github上で更新
a. ```git add .```で，変更内容をステージングする
b. ```git commit -m "○○"```で，コミットを作成する
○○は，以下の形式でコメントを追加する
```ブランチ名：追加したhtmlファイルのタイトル名(拡張子は含まない)```
c. ```git push origin ○○```でプッシュする(○○はブランチ名)

### 6. pull Requestの作成
a. githubのPull Requestを開く
b. 右上のNew Pull requestをクリック
c. compareを自分のブランチに設定
d. pull Requestを作成する
e. Create Pull Requestを選択
f. 任意にコメントし，Create Pull Requestを選択

### 7. discord上で連絡
webサイト/git連絡用にて，コミット名のスレッドを作成し，やちをメンションし，Pull Requestのリンクを貼って連絡すること