function translateActionCreator(stringToTranslate){
  return {
    type: 'TRANSLATE',
    stringToTranslate
  }
}

function deleteActionCreator(deletedElement){
  return {
    type: 'DELETE',
    deletedElement
  }
}


export default {translateActionCreator, deleteActionCreator};