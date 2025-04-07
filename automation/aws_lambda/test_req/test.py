import json
import requests

def lambda_handler(event, context):
    response = requests.get('https://api.github.com')
    return {
        'statusCode': 200,
        'body': json.dumps({
            'message': 'Hello from updated Lambda 2!',
            'github_status': response.status_code
        })
    }
