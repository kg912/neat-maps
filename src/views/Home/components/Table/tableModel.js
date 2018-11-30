import zipObject from 'lodash/zipObject';

const columns = ['col0', 'col1', 'col2', 'col3', 'col4'];
export default function TableModel(rawData) {
	if(rawData !== null && rawData !== undefined) {
		if(rawData.length > 0) {
			for (let y = 0; y < rawData.length; y++) {
				rawData[y] = zipObject(columns, rawData[y]);
				rawData[y].key = y;
			}
		}
	}
	return rawData;
}

