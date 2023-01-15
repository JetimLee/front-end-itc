import requests

# result = requests.get("https://google.com")
# print(result)
# print(result.status_code)

url = "https://icanhazdadjoke.com/search"

response = requests.get(
    url, headers={"Accept": "application/json"}, params={"term": "cat","limit":1})

# converts the response to a python dictionary that you can do something with
data = response.json()
print(data["results"])
