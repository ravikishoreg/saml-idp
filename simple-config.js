/**                                                                                
 *  * User Profile                                                                 
 *   */                                                                            
var profile = {                                                                    
          nameIdFormat: 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',  
          email: ''                                                                
}                                                                                  
                                                                                   
/**                                                                                
 *  * SAML Attribute Metadata                                                      
 *   */                                                                            
var metadata = [];                                                                                
                                                                                   
module.exports = {                                                                 
          user: profile,                                                           
          metadata: metadata                                                       
}           
