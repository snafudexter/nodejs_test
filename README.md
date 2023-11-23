# Node JS test

## Before you begin, make sure you have a MySQL DB setup with a connection string that you need to put in .env

## Basic API with Scalability Considerations
1. `POST /students`

   Use this to create students by passing in an array in request body as follows:
   ```
   {
	"students": [
		{
			"name": "GGWP",
			"grade": 1,
			"age": 32,
			"classId": 1
		},
		{
			"name": "wp",
			"grade": 1,
			"age": 22
		}
	]
    }
    
2. `GET /student/:id`
  Use this route to get a student information by ID
3. `GET /students?take=20&skip=40`
  Use this route to get a list of students.
  The count and offset of data can be controlled using `take` and `skip` variables.
  

