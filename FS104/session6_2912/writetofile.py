
import json


person = '{"name": "Vaibhav", "languages": ["English", "Hindi"]}'
person_dict = json.loads(person)

print( person_dict)

print(person_dict['languages'])