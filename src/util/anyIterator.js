export default function anyIterator ( object ) {
	if ( object[Symbol.asyncIterator] ) return object[Symbol.asyncIterator]() ;
	else return object[Symbol.iterator]() ;
}
