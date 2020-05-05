/** Formulating the data
* @param {object} bedrockDetails - This object contains the preference response details.
* @param {object} componentId - The ID of the component that is to be searched for.
* @return {Array} - The Component label of the corresponding component.
*/

export function getComponentHeader(bedrockDetails, componentId) {
  let componentHeader = null;
  const componentConfig = bedrockDetails.componentsConfigurations;
  if (bedrockDetails && componentConfig) {
    for (let index = 0; index < componentConfig.length; index += 1) {
      if (componentConfig[index].id === componentId) {
        componentHeader = componentConfig[index].label;
        break;
      }
    }
  }
  return componentHeader;
}

/**
 * A helper function which validates the bedrock preferences and decides whether a particular bedrock event is configured or not.
 * @param  {Object} bedrockDetails - It is the entire bedrock preferences object.
 * @param {String} componentId - It is constant value
 * @param {String} preferenceId - It is a constant value respective to the event configured in the bedrock
 * @return {Object} - It returns the Object which helps to decide whether a particular field is required to be shown or not .
 */

export function validateBedrockDetails(bedrockDetails, componentId, preferenceId) {
  const preferenceValue = {};
  if (bedrockDetails && bedrockDetails.componentsConfigurations) {
    bedrockDetails.componentsConfigurations.forEach((result) => {
      if (result.id === componentId && result.filterDetails) {
        for (let index = 0; index < result.filterDetails.length; index += 1) {
          if (result.filterDetails[index].id === preferenceId) {
            preferenceValue.display = result.filterDetails[index].display;
            preferenceValue.isPresent = true;
            break;
          }
        }
      }
    });
  } else {
    preferenceValue.display = '';
    preferenceValue.isPresent = false;
  }
  return preferenceValue;
}
