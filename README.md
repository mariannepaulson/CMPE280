# CMPE280
Instructions

1) Open your git bash shell and Fetch the code with below command

git clone https://github.com/mariannepaulson/CMPE280.git

2) Navigate to where you downloaded the code

3) run npm install in
	\CMPE280-master\Server\server>

4) run npm start in same directory

5) Server should be running on localhost:5000

6) Install Mongod and start it

7) Routes

	To add talent:	localhost:5000/addtalent
	Display talent:	localhost:5000/talent (will also be redirected to this route after adding talent)
	Search talent:	localhost:5000/talent/first name
	Delete talent:	localhost:5000/deletetalent/first name
	Add records:	  localhost:5000/addrecords

You can push your changes as follows:
------------------------------------
1) Invoke Gitbash
2) git add .
3) git commit -m "comments"
4) git push

Note1: If cannot push you might have to pull first
Note2: You might have to do this command but not sure
		git remote add Unique_name_you_choose https://github.com/mariannepaulson/CMPE280.git
