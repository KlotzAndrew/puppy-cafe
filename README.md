testing
```bash
serverless invoke local --function createPuppy -s qa --path test/createPuppy.json

serverless invoke local --function indexPuppy -s qa

serverless offline start -s dev --skipCacheInvalidation
curl http://localhost:3000/puppies

curl -X POST \
  http://localhost:3000/puppy \
  -H 'content-type: application/json' \
  -d '{"puppy": {"name": "cool doggo!"}}'
```


deploy
```bash
serverless deploy --function createPuppy -s qa
```

logs
```bash
serverless logs -f createPuppy -s qa -t
```

dev setup
```bash
serverless offline start -s dev
```
