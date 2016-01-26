/*
 *	Module Dependencies
 */

var express = require('express'),
	stylus = require('stylus'),
	nib = require('nib'),
	coffee = require('express-coffee-script')

var app = express()

function compile(str, path){
	return stylus(str)
		.set('filename', path)
		.use(nib())
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(stylus.middleware(
	{
		src: __dirname + '/public',
		compile: compile
	}
))

app.use(coffee(
	{
		src: __dirname + '/public'
	}
))


app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index',
  { title : 'BACON' }
  )
})

app.listen(3000)
