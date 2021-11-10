import Parser from './Parser.js' ;

export default function from ( grammar ) {
	return new Parser( grammar ) ;
}
