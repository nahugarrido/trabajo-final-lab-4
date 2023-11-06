export default class SearchUtils {
  static parseSearch(input: string) {
    const dataArray = input.split(',');
    let address = {
      street: '',
      district: '',
      country: '',
    };
    if (dataArray.length > 3) return false;

    switch (dataArray.length) {
      case 1:
        address.street = dataArray[0];
        break;
      case 2:
        address.street = dataArray[0];
        address.district = dataArray[1];
        break;
      case 3:
        address.street = dataArray[0];
        address.district = dataArray[1];
        address.country = dataArray[2];
        break;
    default: 
        return;
    }
    return address;
  }

  static normalize(str: string){
    return str.trim().toLowerCase();
  }

  static includesNormalized(includes: string, included: string){
    return this.normalize(includes).includes(this.normalize(included));
  }
}
