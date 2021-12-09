from flask import Flask
from flask import render_template

app = Flask(
	__name__,
	template_folder='templates',
	static_folder='static'
)

@app.route('/')
def base_page():
	server_status = "stopped"
	return render_template(
		'base.html',
		server_status=server_status
	)

if __name__ == "__main__":
	app.run(
		host='0.0.0.0',
		port=5000
	)

