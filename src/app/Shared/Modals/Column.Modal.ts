export interface Column {
  headerData: string;
  isSort: boolean;
  keyName: string;
  isText?: boolean;
  isImage?: boolean;
  isButton?: boolean;
  buttonName?: string;

  isDropdown?: boolean;
  dropdownSelectValue?: string;
}
