# SCRIPTS

- build
- zip file

## deploy
```
yarn build
```

## SEO
- build/index.html
=> add script: src/meta.html 
- delete excess code: meta-decription & title tag
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

```bash
rm __MACOSX/ build -rf && rm /var/www/ml.vietai.org public_html/* -rf && unzip build.zip && mv ./build/* /var/www/ml.vietai.org/public_html/ -rf
```

