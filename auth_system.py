import json
class UserManagement(object):
    users = {}
    def __init__(self):
        self.users = json.load(open("auth.json"))
    
    def add_user(self, email, password):
        self.users[email.lower()] = password
        self.save()
    
    def save(self):
        open("auth.json", "w").write(json.dumps(self.users))

    def check_auth(self, user, password):
        if user.lower() in self.users:
            if self.users[user.lower()] == password:
                return True
        return False
    
ums = UserManagement()

from flask import Flask, request, render_template, redirect

app = Flask(__name__)

@app.route('/', methods=["GET"])
def main():
    return render_template('index.html')

@app.route('/signin.html', methods=["GET"])
def signin():
    if "email" in request.cookies:
        if "password" in request.cookies:
            if ums.check_auth(request.cookies.get("email"), request.cookies.get("password")):
                return render_template('home.html')
            
    return render_template('signin.html')

@app.route('/signup.html', methods=["GET"])
def signup():
    return render_template('signup.html')

@app.route('/submitsignup/<email>/<password>', methods=["GET"])
def signup_form(email, password):
    ums.add_user(email, password)
    return redirect("https://test_m.jinsei.tech/signin.html")

@app.route("/logbook.html")
def logbook():
    if "email" in request.cookies:
        if "password" in request.cookies:
            if ums.check_auth(request.cookies.get("email"), request.cookies.get("password")):
                return render_template('logbook.html')
            
    return render_template('signin.html')

@app.route("/new_bot_entry.html")
def new_bot_entry():
    if "email" in request.cookies:
        if "password" in request.cookies:
            if ums.check_auth(request.cookies.get("email"), request.cookies.get("password")):
                return render_template('new_bot_entry.html')
            
    return render_template('signin.html')

@app.route("/new_self_entry.html")
def new_self_entry():
    if "email" in request.cookies:
        if "password" in request.cookies:
            if ums.check_auth(request.cookies.get("email"), request.cookies.get("password")):
                return render_template('new_self_entry.html')
            
    return render_template('signin.html')

@app.route("/home.html")
def main_home():
    if "email" in request.cookies:
        if "password" in request.cookies:
            if ums.check_auth(request.cookies.get("email"), request.cookies.get("password")):
                return render_template('home.html')
            
    return render_template('signin.html')

app.run(port=5500, host="0.0.0.0", debug=True)