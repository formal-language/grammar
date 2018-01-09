import Parser from './Parser' ;

export default function from ( grammar ) {
	return new Parser( grammar ) ;
}
