# SCRIPTS

- build
- zip file

## deploy
```
yarn build
```

## SEO

***banner images is in root build folder***

- build/index.html
=> add script: src/meta.html 
- delete excess code: meta-decription & title tag

Note that it is case sensitive in *banner image name*

```
scp -i ~/.ssh/id_rsa  ./Desktop/build.zip root@kinhlo.com:/root/
ssh root@kinhlo.com
```

```bash
rm __MACOSX/ build -rf
rm /var/www/ml.vietai.org/public_html/* -rf
unzip build.zip
mv ./build/* /var/www/ml.vietai.org/public_html
```

## Test share on FB
https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fml.vietai.org%2F
