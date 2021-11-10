import Children from '../ast/Children.js' ;

export default function anyIterator ( object ) {
	if ( object instanceof Children ) return object.iterator ;
	else if ( object[Symbol.asyncIterator] ) return object[Symbol.asyncIterator]() ;
	else return object[Symbol.iterator]() ;
}
