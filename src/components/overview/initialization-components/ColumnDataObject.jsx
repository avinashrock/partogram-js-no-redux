
/*
It is placeholder Function which accepts two different labels and two different values
and returns an obect with assigned key value pair.
*/

export function ColumnDataObject(label, value, keyLabel = 'label', keyValue = 'value') {
  return ({
    [keyLabel]: label,
    [keyValue]: value,
  });
}
