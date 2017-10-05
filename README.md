testing
```bash
serverless invoke local --function createPuppy -s qa --path test/createPuppy.json

serverless invoke local --function indexPuppy -s qa
```


deploy
```bash
serverless deploy --function createPuppy -s qa
```

logs
```bash
serverless logs -f createPuppy -s qa -t
```
