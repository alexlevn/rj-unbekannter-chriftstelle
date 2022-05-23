# bash

```
yarn build
```

compress & move build.zip to Desktop

```bash
scp -i ~/.ssh/id_rsa  ./Desktop/build.zip root@myvps.com:/root/
ssh root@myvps.com
```

```bash
rm __MACOSX/ build -rf
rm /var/www/ml.vietai.org/public_html/* -rf
unzip build.zip
mv ./build/* /var/www/ml.vietai.org/public_html
```

## Test share on FB

https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fml.vietai.org%2F

## Reset root pass incase Lost ssh-key

- Setup SSL

- Follow this [post](https://docs.digitalocean.com/products/droplets/resources/lost-ssh-key/)
  reset the pass

* [link](https://docs.digitalocean.com/products/droplets/resources/recovery-console/#log-in-with-the-console)

```txt
PasswordAuthentication yes
```

```bash
npm install gh-pages --save-dev
```

package.json

```json
{
  // ...
  "scripts": {
    // ...
    "deploy": "gh-pages -d build",
    "predeploy": "yarn run build"
    // ...
  }
  // ...
}
```
