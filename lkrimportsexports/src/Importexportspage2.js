import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Importexportspage2.css';

const Importexportpage2 = () => {
    return (
        <>
        <div className="import-export-section">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                    <h1 className='import-text'>
                    India's Import and Export Process INDIA'S CUSTOMS CLEARANCE PROCEDURE FOR IMPORT AND EXPORT GOODS
                    </h1>
                </div>
            </div>
        </div>

        <div className="container my-4">
            <div className="text-center">
                <h2 className="import-heading">India's Import and Export Process </h2>
            </div>
            <div className="text-start">
                <h5 className="import-head">INDIA'S CUSTOMS CLEARANCE PROCEDURE FOR IMPORT AND EXPORT GOODS </h5>
                <h5 className="import-head"> IMPORT: Cargo Declaration-Bill of Entry:</h5>
                <p className="importtext">
                Unless the goods are intended for transit by the same vessel or aircraft or for trans shipment to another customs 
                station or to any location outside of India, importers must follow the specific customs clearance procedures of the landed goods. 
                Goods imported in a vessel or aircraft are subject to customs duty. Customs permits the transit of goods without the payment of 
                duty as long as they are specified in the import report or IGM for transit to any location outside of India.  Likewise, comprehensive 
                customs clearance procedures at the port or airport of landing are not required for commodities carried in by specific vessel aircraft 
                for trans shipment to another customs station; instead, the carrier and the relevant agencies must execute a straightforward trans shipment procedure. 
                Once the items arrive at the other customs station, the importer must comply with the customs clearing procedures.  
                After the commodities are unloaded, they may also be trans shipped to a port outside of India.  
                Regulations have also mandated a more straightforward transshipment process in this case, with no duty to be paid.  
                In this context, Customs Sections 52 to 56 are pertinent.
                </p>
                <p className="importtext">
                Importers who offload other products have the choice of clearing them for domestic use following payment of the 
                applicable duties or storing them in accordance with the Customs Act's warehousing rules without immediately paying the applicable charges.
                </p>
                <ul className="import-points">
                    <li>Every importer must submit an entry (also known as a Bill of Entry) for domestic use or storage using the form specified by regulations under Section 46.</li>
                    <li>When goods are cleared through the EDI system, the importer must file a cargo declaration with the specific information needed to process the entry for customs clearance, 
                        but no formal Bill of Entry is filed because it is created in the computer system.
                    </li>
                    <li>When the bill of entry is filed, it must be submitted in a set of copies, each with a separate purpose and colour scheme. 
                        The non-EDI declaration on the bill of entry's body usually states the purpose for which it will be used.
                    </li>
                    <li>Four copies of the bill of entry must be filed by the importer clearing the items for domestic consumption: 
                        the original and duplicate are for customs, the third is for the importer, and the fourth is for the bank to use for remittances.
                    </li> 
                </ul>
                <p className="importtext">
                The following documents are typically needed in the non-EDI system in addition to the bill of entry that the importer or his representative files: 
                </p>
                <ul className="import-bullet-points">
                    <strong>01.</strong>Signed bill
                    <br></br>
                    <strong>02.</strong>List of packing items
                    <br></br>
                    <strong>03.</strong>Airway Bill or Delivery Order/Bill of Lading
                    <br></br>
                    <strong>04.</strong>GATT declaration form duly filled in
                    <br></br>
                    <strong>05.</strong>Importers/CHA's declaration
                    <br></br>
                    <strong>06.</strong>License wherever necessary
                    <br></br>
                    <strong>07.</strong>Letter of Credit/Bank Draft/wherever necessary
                    <br></br>
                    <strong>08.</strong>Insurance document
                    <br></br>
                    <strong>09.</strong>Import license
                    <br></br>
                    <strong>10.</strong>Industrial License, if required
                    <br></br>
                    <strong>11.</strong>Test report in case of chemicals
                    <br></br>
                    <strong>12.</strong>Adhoc exemption order
                    <br></br>
                    <strong>13.</strong>DEEC Book/DEPB in original
                    <br></br>
                    <strong>14.</strong>Catalog, Technical write up, Literature in case of machinery, spares or chemicals as may be applicable
                    <br></br>
                    <strong>15.</strong>Separately split up the value of spares, components machinery
                    <br></br>
                    <strong>16.</strong>Certificate of Origin, if the preferential rate of duty is claimed
                    <br></br>
                    <strong>17.</strong>No Commission declaration
                    <br></br>
                </ul>
                <ul className="import-points">
                    <li>
                    The correctness of the information provided must also be certified by the importer in the form of a 
                    declaration at the foot of the bill of entry when filing the bill of entry and providing the various particulars as specified therein. 
                    Any disagreement or inaccurate declaration has legal ramifications, so the importer should take the necessary precautions when signing these declarations.
                    </li>
                    <li>
                    Instead of submitting documents for evaluation under the EDI system, the importer provides the Service Centre with electronic 
                    declarations that include all pertinent data.  Because of the declaration's lack of credibility, the service centre operator 
                    takes a signed paper copy of it.  The importer/CHA creates a checklist for data verification.  Following verification, 
                    the Service Centre Operator enters the data into the system, which produces a B/E Number. 
                    This number is then approved on the printed checklist and sent back to the importer/CHA.  At this point, no original documents are taken. 
                    At the time of the examination, original documents are taken.  Following customs clearance, the importer/CHA must additionally sign the final paperwork.
                    </li>
                    <li>
                    The initial step in processing a bill of entry is known as "noting the bill of entry in relation to the carrier's IGM.
                    " A bill of entry number is generated and indicated on all copies, and the importer must have the bill of entry noted in the relevant unit in 
                    the non-EDI system. This unit verifies that the consignment to be cleared has manifested in the specific vessel. After noting the bill of entry 
                    gets sent to the appraising section of the Custom House for assessment functions, payment of duty, etc. In the EDI system, 
                    the Steamer Agents get the manifest filed through EDI or by using the service center of the Custom 
                    House and the noting aspect is checked by the system itself-which also generates the bill of entry number.
                    </li>
                    <li>
                    The Bill of Entry is sent, either electronically or manually, to the relevant Appraising Group in the 
                    Custom House that handles the commodity that has to be cleared after it has been noted or registered.  
                    A variety of groups within the Custom House's Appraising Wing deal with designated goods that fall under various Chapter Headings of the Customs Tariff. 
                    They conduct additional examination from an assessment, import permissibility, etc. perspective.Evaluation:
                    </li>
                    <li>
                    Determining the duty liability while carefully considering any exemptions or benefits claimed under various export promotion programs is the primary 
                    responsibility of the assessing officer in the appraising groups.  Additionally, they must determine whether the imported items are subject to any 
                    restrictions or prohibitions, whether they need any licenses, permits, or other authorisation, and if so, when these will be available.
                    </li>
                    <li>
                    In essence, duty assessment entails correctly classifying imported items under the customs tariff while paying careful attention to interpretation rules, chapter and section comments, etc., 
                    and calculating the duty burden.  In cases when the commodities are ad valorem assessable, it also entails accurately determining their value.
                    </li>
                    <li>
                    In order to determine whether the transaction value method and the invoice value claimed for the basis of assessment are acceptable or 
                    whether value needs to be redetermined with careful consideration of the provisions of Section 14 and the valuation rules issued thereunder, 
                    the case law, and various instructions on the subject, the assessing officer must take note of the invoice and other declarations submitted along 
                    with the bill of entry to support the valuation claim.  Additionally, he notes current values and other valuation data that the Custom House provides.
                    </li>
                    <li>
                    An examination order, including an order for the drawing of a representative sample, may be issued by the appraising officer prior to the 
                    finalisation of the assessment if he is unclear about the description of the goods from the document or has some doubts about the proper classification, 
                    which may only be determined after a thorough examination of the goods' nature or testing of its samples.  
                    This is usually done on the back of the original bill of entry, which is given to the appraising staff stationed at the docks or air cargo 
                    complexes where the products are inspected in front of the importer's representative by the importer's authorised agent.
                    </li>
                    <li>
                    The group's evaluating officers evaluate the bill of entry after receiving the examination report.  
                    He lists all of the duties that may be leviable, including basic, countervailing, anti-dumping, safeguard duties, and others, 
                    separately in the bill of entry together with the final classification and valuation.  After being confirmed by the 
                    Assistant Commissioner or Deputy Commissioner based on certain value restrictions, the bill of entry is forwarded to a comptist who determines 
                    the duty amount by factoring in the exchange rate on the relevant date as stipulated in Section 14 of the Customs Act.  
                    </li>
                    <li>
                    The importer's representative can then go and request delivery of the goods from the custodians after the duty responsibility has been 
                    assessed and determined and the duty has been deposited with the Treasury or designated banks.
                    </li>
                    <li>
                    When the goods have already been inspected for final classification or valuation, the dock appraising staff does not need to check or examine 
                    them further at the time of delivery. The goods can be accepted once the proper orders have been taken and any outstanding payments to the 
                    custodians have been made.
                    </li>
                    <li>
                    The appraising officer typically evaluates the products based on the information and data provided to the importer in the invoice, 
                    bill of entry, and other relevant papers, such as the write-up, catalogue, etc.  He also decides if there are any restrictions or 
                    prohibitions on the importation of the items. If there are no restrictions or prohibitions, he may permit duty payment and delivery of the 
                    goods on what is known as a second check/appraising basis.  Using this method, the importer or his agent pays the duties as determined and 
                    calculated in the Custom House, and after receiving the proper order on the back of the duplicate copy of the bill of entry, they submit the 
                    goods to the examining staff for examination in the import sheds in the docks, etc.  After the shed assessor issues an out-of-charge order, 
                    the importer or his agent may clear the items if they are deemed to be as declared and no other discrepancies, disputes, etc. are found
                    </li>
                    <li>
                    The importer has the right to request an assessment order if he is unhappy with the classification, 
                    rate of duty, or valuation that the appraising officer has decided upon.  Within the allotted time and in the required way, 
                    an appeal against the assessment order may be filed with the relevant appellate body. 
                    </li>
                    <li>
                    As previously noted, the cargo declaration is electronically sent to the evaluating officer in the groups using the EDI system for handling documents and 
                    declarations for obtaining import clearances.
                    </li>
                    <li>
                    The cargo declaration is processed on-screen by the assessing officer while taking into account all of the previously mentioned characteristics for the 
                    manual process.  On the other hand, the EDI system performs all of the computations on its own.  Furthermore, the system provides helpful information 
                    for duty computation. For instance, upon acceptance of a specific exemption notification, the system determines the level of exemption under that 
                    notification and computes duty appropriately. In a similar vein, it computes using the applicable exchange rate that is in effect automatically.  
                    Therefore, the EDI system does not require a comptist.  The assessing officer may ask the importer a question if he requires any clarification.  
                    Through the service centre, the party responds to the query once it has been printed.
                    </li>
                    <li>
                    A copy of the assessed bill of entry is printed in the service centre following an evaluation.  
                    Documents are typically reviewed under EDI when the items are being checked.  Following the Customs Officer's "out of charge" declaration, 
                    the final bill of entry is printed.  In some circumstances, the EDI system offers the capability of system appraisal.  In this procedure, the 
                    importer's declaration is deemed accurate, and the system computes the duty that the importer must pay.  No assessing officer is involved in this situation.
                    </li>
                    <li>
                    Additionally, some large Customs stations offer a tele-inquiry service that allows one to check the status of documents filed using EDI 
                    systems over the phone.  If a question is raised, it can be printed and faxed to the importer, exporter, or CHA office.  Analysis of the Products:
                    </li>
                    <li>
                    Every imported item must be inspected to ensure that the description provided in the bill of entry is accurate.  Nonetheless, a portion of the 
                    shipment is chosen at random and inspected.  The importer may request that the goods be examined before determining the duty liability if 
                    he does not have all the necessary information with him at the time of import. Alternatively, if the Customs Appraiser or Assistant Commissioner 
                    determines that the goods must be examined before an assessment, the goods are examined before the assessment.  We refer to this as the First Appraisal.  
                    When filing the bill of entry or during the data entry phase, the importer must request the first cheque examination. 
                    The justification for obtaining the initial appraisal must also be given.   Together with the examination instructions, the Customs Appraiser 
                    returns the original copy of the bill of entry to the importer/CHA after noting the examination order on it.  After then, the importer/CHA is 
                    told to bring the bill of entry to the import shed so that the contents can be inspected. In accordance with the examination order, the 
                    shed appraiser or dock examiner inspects the products and documents his findings.  He sends sealed samples to the group if they have requested samples.  
                    To determine the duty, the importer must return the aforementioned bill of entry to the assessing officer.  The bill of entry is evaluated by the appraiser.  
                    If the value exceeds Rs. 1 lakh, the Assistant/Deputy Commissioner countersigns it.
                    </li>
                    <li>
                    The products may also be inspected after the duty has been assessed and paid.  We refer to this as the Second Appraisal.  The majority of consignments are cleared based on a second appraisal. 
                    It should be mentioned that the entire shipment is not inspected.  The only packages that are inspected in the shed are those chosen at random.
                    </li>
                    <li>
                    According to the EDI system, the bill of entry must be presented at the counter for registration and inspection in the import shed following group or 
                    initial appraisal, as applicable.  At this point, a declaration on the accuracy of the entries and the authenticity of the original papers must be made.  
                    The B/E is given to the shed appraiser for a review of the items following registration.  The CHA must present the required documentation with the B/E. 
                    </li>
                    <li>
                    Once the products have been examined, the Shed Appraiser enters the report into the system, gives the group the first appraisal B/E, and indicates 
                    "out of charge" if the Bs/E have already been evaluated.  The system then prints the order of clearance and the bill of entry (in triplicate).  
                    These copies all include the Shed Appraiser's name, clearance number, and examination report.  Following the appraiser's signature, the order and 
                    two copies of B/E must be returned to the CHA/Importer.  The Shed Appraiser keeps one copy of the order, which is affixed to the Customs copy of B/E.  
                    Green Channel infrastructure:
                    </li>
                    <li>
                    The green channel clearance facility has been granted to a few significant importers.  It indicates that things are cleared without undergoing a 
                    regular inspection.  When they file the bill of entry, they must make a declaration on the declaration form.  With the exception of not physically 
                    inspecting the items, the appraisal is completed in accordance with standard protocol.  In these situations, just markings and numbers should be examined.  
                    Rarely, though, senior officers or the investigative wing, such as SIIB, may order a physical examination if there are specific concerns about the products' 
                    number or description.  Bond execution:
                    </li>
                    <li>
                    When applicable, the execution of end-use bonds with a bank guarantee or other surety must be provided in order to receive duty-free or 
                    concessional assessments under various programs and announcements.  These must be completed in the designated formats in front of the evaluating appraiser.  
                    Duty Payment:
                    </li>
                    <li>
                    TR-6 challans or the designated banks are the two ways to pay the duty.  Various banks have been approved by various Custom Houses to accept duty payments.  
                    Before depositing the duty, the bank and branch names must be verified.  The payment details in the challan that is turned in to Customs are approved by 
                    the bank.  Bill of Entry Amendment:
                    </li>
                    <li>
                    If errors are discovered after the documents have been submitted, the Deputy/Assistant Commissioner must approve any changes made to the entry.  
                    The supporting documentation may be included with the amendment request.  For instance, a letter from the shipping agent is needed if the container number 
                    needs to be changed.  A document may be amended once the goods have been released from charge, that is, after the Deputy or Assistant Commissioner has 
                    received adequate documentation that the commodities have been cleared.  Bill of Entry Prior Entry:
                    </li>
                    <li>
                    Section 46 of the Act provides for the filing of the bill of entry before the goods arrive, allowing for a quicker clearance of the goods.  
                    If the ship or aircraft transporting the cargo arrives within 30 days of the bill of entry being presented, the bill of entry is legitimate. 
                    Five copies of the bill of entry must be filed by the importer, with the fifth copy being referred to as the Advance Noting copy. 
                    </li>
                    <li>
                    As soon as the IGM is lodged, the importer must produce the bill of entry for final notation and state that the vessel or aircraft is due within 30 days.  
                    All imports are eligible for advance consideration, with the exception of those into bond bills of entry and during the special period.  
                    The mother or feeder vessel
                    </li>
                    <li>
                    When commodities arrive by container ship, they are frequently moved from mother vessels to smaller vessels known as feeder vessels at intermediate 
                    ports (such as Ceylon).  The importer does not know which vessel will ultimately deliver the goods to an Indian port at the time the advance note B/E is filed.  
                    In certain situations, the bill of lading may be used to fill in the mother vessel's name. The names of the mother vessel and feeder vessel 
                    Specialised Schemes may be added to the bill of entry upon the feeder vessel's arrival.
                    </li>
                    <li>
                    Specialised programs like DEEC or EOU, among others, are used to import commodities.  In certain situations, the importer must sign bonds with the customs 
                    authorities to ensure that the requirements of the corresponding notifications are met.The importer must pay the applicable duty on the goods if he does not 
                    meet the requirements.  The bond amount would be the same as the tariff that would be applied to the imported goods.  
                    Along with the bond, the bank guarantee is also necessary.  However, the importer's status—such as Super Star Trading House or Trading House—determines 
                    the size of the bank guarantee.  Bill of Entry for Storage/Bond:
                    </li>
                    <li>
                    Goods are cleared for storage using a different type of bill of entry.  Every document that must be included with a bill of entry for domestic use must 
                    also be included with the bill of entry for storage. Duty payable is calculated in the same way as the bill of entry.  The goal of evaluating the items 
                    at this point is to secure the duty in the event that the goods do not arrive at the warehouse, even though the duty is not necessary to be paid at the 
                    time of warehousing.  When the items for which an ex-bond bill of entry has been lodged are cleared ex-bond, the duty is paid.  The duty rate in effect 
                    on the day the products are actually taken out of the warehouse is the rate that applies to imported goods that are cleared from the warehouse.  
                    (Sources: CBEC Circulars No. 22/97, dated 4/7/1997, 63/97, dated 21/11/1997), Uncleared goods (Bill of Entry) regulation, 1972, ATA carnet (Form Bill of 
                    Entry and Shipping Bill) regulations, 1990, and Bill of Entry (Forms) regulations, 1976.
                    </li>
                </ul>
                <br></br>
                <br></br>
                <br></br>
                <div className="text-center">
                    <h5 className="export-head">EXPORT:</h5>
                </div>
                <br></br>
                <p className="importtext">The exporter or his representatives must complete the following procedures in order for export goods to be cleared: </p>
                <ul className="import-points">
                    <strong className='importhead'><li>Registration :</li></strong>
                    <p className="importtext">
                    Before filing the shipping bill for the approval of export products, exporters must get a Business Identification Number (BIN) based on the PAN 
                    from the Directorate General of Foreign Trade.  The Customs System receives PAN-based BINs from the DGFT online under the EDI System.  
                    Additionally, exporters must open a current account in the specified bank for the credit of any drawback incentive and register an authorised 
                    foreign exchange dealer code, which is how export revenues are anticipated to be realised.
                    </p>
                    <li>
                    Every time a new port, airport, steamer agent, airline, or shipping line opens for business, they must register with the Customs System.  
                    The Assistant/Deputy Commissioner in charge of the EDI System must be notified whenever the electronic processing of shipping bills, etc., 
                    is delayed due to these entities' failure to register in order to register the new entity in the system.
                    </li>
                    <li>When exporting under export promotion programs, registration:</li>
                    <p className="importtext">All exporters who plan to export under the export promotion program must register at the customs station with their licenses, DEEC books, etc.  Original documentation is needed for this type of registration. </p>
                    <li>
                    Shipping Bill Processing—Non-EDI: Under the manual system, shipping bills—or, if applicable, bills of export—must be submitted in the format specified 
                    by the 1991 Shipping Bill and Bill of Export (Form) regulations. If export products are cleared at the Land Customs Stations, the bills of export are used.  
                    For the export of duty-free goods, dutiable goods, exports under drawback, etc., various shipping bill/bill of export formats have been established.
                    </li>
                    <li>
                    Invoices, AR-4s, packing lists, and other original papers must be filed with the shipping bills.  The export department's assessing officer verifies the 
                    items' value, exportability under EXIM policy, classification under the drawback schedule in the event of drawback shipping bills, rate of duty or cess, 
                    if applicable, and other applicable legislation.  The DEEC group handles the processing of the DEEC/DEPB shipping bills.  The assessing officer confirms 
                    that the description of the final product as stated in the DEEC book corresponds with the description of the products reported in the shipping bill and 
                    invoice in the case of DEEC shipping bills..  The assessing officer may request samples of the commodities from the docks if he has any concerns about the 
                    description or value of the products.  He can also contact to get any additional information he needs to process the shipping bill.  
                    After examining the material visually, he can either evaluate the shipping bill or submit it for testing and pass the shipping bill provisionally.
                    </li>
                    <li>
                    The exporter or his agent presents the products to the shed appraiser (export) in docks for inspection after the export department has approved the 
                    shipping bill.  For the purpose of inspecting the items, the shed appraiser may mark the document for a Customs officer, who is typically an examiner.  
                    The shed appraiser (export) is in charge of overseeing the examination.  The exporter may get in touch with the preventive superintendent to oversee the 
                    loading of the items onto the vessel if the shed appraiser issues a "let export" order based on the goods' description and other details being as stated.
                    </li>
                    <li>
                    The examining staff in the ports may mark the shipping bill back to the export department/DEEC group with their observations and, if necessary, 
                    a sample of the products if they discover any discrepancies in the commodities.  The export department re-examines the case and determines if export is 
                    permitted, whether a description, value, etc., must be changed before export, and whether any additional steps under the Customs Act, 
                    1962, must be followed in the event of a dispute over a description, value, etc.
                    </li>
                    <strong className='importhead'><li>Handling the EDI shipping bill:</li></strong>
                    <p className="importtext">Under the EDI System, declarations must be submitted through the Customs Service Centres in the format specified.  A checklist is created by the 
                        exporter/CHA to verify the data.  Once the information has been verified, the Service Centre operator submits it to the system, which creates a 
                        Shipping Bill Number. This number is then approved on the printed checklist and sent back to the exporter/CHA. The Service Centre prints and provides 
                        the TR-6 challans for exports that are subject to export cess to the exporter/CHA as soon as the shipping bill is submitted.  
                        At the specified bank, the cess can be paid using the challan as proof.  At this point, exporter/CHA is not given a copy of the shipping bill.
                    </p>
                    <strong className='importhead'><li>Quota Allocation, Octroi Procedure, and Other Certification for Export Goods:</li></strong>
                    <p className="importtext">
                    The export invoice must include the quota allocation label adhered to it.  When entering the shipping bill, the AEPC allocation number must be input into 
                    the system.  When the export cargo is examined by Customs, the export invoices' quota certification must be presented alongside other original documentation.
                    The date the entire shipment is delivered to Customs for inspection and properly entered into the computer system must be the pertinent information for 
                    calculating the quota's validity date.  The quota information is automatically validated from the AEPC/TEXPROCIL system in Delhi Air Cargo's EDI System.
                    </p>
                    <p>
                    For the purpose of the Octroi exemption, the exporter may utilise export invoices or other documentation that the Octroi authorities want, as the shipping 
                    bill is prepared only after the "let export order" is issued by Customs. 
                    </p>
                    <strong className='importhead'><li>Goods arriving at the docks:</li></strong>
                    <p className="importtext">
                    On the basis of the checklist and further declarations submitted by the exporter in the Service Centre, the products brought for inspection and eventual 
                    "let export" are permitted access to the Dock.  On the back of the Check List, the port authorities must attest to the quantity of items that were 
                    actually received.
                    </p>
                    <strong className='importhead'><li>System Appraisal of Shipping Bills:</li></strong>
                    <p className="importtext">
                    Frequently, the system processes the shipping bill without human involvement based on the exporters' declarations.  In other situations where the Customs 
                    Officer processes the Shipping Bill on screen, he may request samples if necessary to verify the claimed value or to verify 
                    classification under the Drawback Schedule.  If he thinks it's necessary, he can also provide any additional instructions for a product inspection.
                    </p>
                    <strong className='importhead'><li>Shipping Bill Status:</li></strong>
                    <p className="importtext">
                    Prior to the items being transported into the Docks for inspection and export, the exporter or CHA can verify with the Service Center's 
                    query counter if the shipping bill they submitted in the system has been cleared or not. If a question is asked, it must be answered via 
                    the service centre or, if CHAs have EDI access, through their own terminals.  Once all of the questions have been adequately addressed, 
                    the customs officer may pass the shipping bill.
                    </p>
                    <strong className='importhead'><li>Customs Inspection of Export Cargo:</li></strong>
                    <p className="importtext">
                    Following the goods' arrival at the dock, the exporter or CHA may get in touch with the Customs Officer assigned to the task and provide the 
                    checklist, the Port Authority's approval, and any other declarations as mentioned, along with all original paperwork, including the packing list, 
                    invoice, AR-4, and other documents. Before marking the Electronic Shipping Bill and handing over all original documents to the Dock Appraiser, 
                    who may designate a Customs Officer for the examination and notify the officer's name and the packages to be examined, if any, on the checklist, 
                    the Customs Officer may confirm the quantity of the goods actually received and enter it into the system. 
                    </p>
                    <p className="importtext">
                    The shipment may be inspected or examined by the Customs Officer and the Dock Appraiser.  The report of the examination is entered into the 
                    system by the Customs Officer.  The Electronic Bill, the original documents, and the checklist are then marked and given to the Dock Appraiser.  
                    Dock Appraiser may proceed to "let export" the shipment and notify the exporter or his agent if he is satisfied that the details entered in the 
                    system match the description provided in the original documents and as observed during the physical examination.
                    </p>
                    <strong className='importhead'><li>Difference Between the Declaration and Physical Examination:</li></strong>
                    <p className="importtext">
                    The relevant appraiser keeps the declaration, the checklist, and all original documentation.  The appraiser may mark the electronic shipping bill 
                    for the Assistant Commissioner or Deputy Commissioner of Customs (Exports) if there is a discrepancy between the declaration in the bill and the 
                    physical documentation or examination report. In order to resolve a dispute, he may also direct the exporter or his agent to meet with the Assistant 
                    Commissioner or Deputy Commissioner of Customs (Exports) and forward the physical documents to them.  The Shipping Bill must be processed in 
                    accordance with the Department's opinions if the exporter concurs.  However, in cases where the exporter disagrees with the Department's position, 
                    natural justice principles must be adhered to before the matter is resolved.
                    </p>
                    <strong className='importhead'><li>Filling and loading containers with goods :</li></strong>
                    <p className="importtext">
                    The steamer agent can then approach the appropriate officer (Preventive Officer) to approve the shipment once the exporter or his agent gives them a 
                    copy of the shipping bill that has been properly approved by the appraiser approving "Let Export." When it comes to container freight, Preventive 
                    Supervision is in charge of the container's stuffing at the dock.  Preventive supervision is used when loading bulk and containerised cargo. 
                    The details of the actual packages packed into the container, the bottle seal number, and the loading of the cargo container onboard can all be 
                    entered into the system by the Customs Preventive Superintendent (Docks), who can then sign off on the exporter's copy of the shipping bill 
                    that the steamer agent gave him.  The Superintendent (Docks) may note in the system that the shipping bill needs to be amended or that the 
                    quantity has changed if there is a discrepancy in the quantity of packages packed in the containers or items loaded on a vessel. 
                    Additionally, unless the shipping bill is appropriately modified to reflect the altered quantity, it cannot be used to approve Drawback/DEEC recording.  
                    The exporter's copy of the shipping bill may be endorsed "Shipped on Board" by the Customs Preventive Officer overseeing the loading of the 
                    container and other cargo into the ship.
                    </p>
                    <strong className='importhead'><li>Sample Drawal: </li></strong>
                    <p className="importtext">
                    The Customs Officer may take two samples from the shipment and record the information about them in the ICES/E system, together with the testing agency's 
                    details, if the Appraiser Dock (export) requests that samples be taken and examined.  The dates of the samples that were drawn are not recorded in a 
                    different register.  The customs officer prepares three copies of the test memo, which are then signed by the customs officer and the appraising officer 
                    on behalf of the exporter or his agent and customs.  The three test memo copies will be disposed of as follows:
                    </p>
                    <ul className="import-points">
                        <li>Original: to be forwarded to the testing agency with the sample. </li>
                        <li>Duplicate: The second sample's customs copy will be kept. </li>
                        <li>The exporter's copy, in triplicate.</li>
                    </ul>
                    <p className="importtext">
                    A sample may also be taken for purposes other than testing, such as visual inspection and description verification, market value inquiry, etc., 
                    if the assistant commissioner or deputy commissioner deems it essential. 
                    </p>
                    <strong className='importhead'>Modifications: </strong>
                    <p className="importtext">
                    If the papers have not yet been entered into the system and the shipping bill number has not yet been generated, 
                    any changes to the checklist created following the filing of the declaration may be changed at the service centre.  Amendments are made in the following 
                    way when they are needed after the shipping bill number has been generated or after the goods have been taken into the export dock.
                    </p>
                    <ul className="import-points">
                        <li>If the items are not yet authorised for "let export," the Assistant Commissioner (Exports) may allow changes. </li>
                        <li>If the "Let Export" order has already been issued, only the Additional/Joint Commissioner, Custom House, who oversees an export department, may make changes.</li>
                    </ul>
                    <p className="importtext">
                    In both situations, the Assistant Commissioner or Deputy Commissioner (Export) may authorise the system modifications on behalf of the Additional or 
                    Joint Commissioner following the granting of permission for alterations.  Before a system amendment is authorised, the exporter may turn in all copies of 
                    the shipping bill to the dock appraiser for cancellation if the printout has already been created. 
                    </p>
                    <strong className='importhead'>Export of items Under Drawback Claim:</strong>
                    <p className="importtext">
                    The officers of the Drawback Branch process the Drawback claim via the EDI system on a first-come, first-served basis from the time the items are actually 
                    exported.  No separate drawback claims need to be filed.  The service center's query counter allows customers to find out the status of their shipping bills 
                    and whether their DBK claim has been approved.  Any questions or deficiencies that have been brought to light are displayed on the terminal. 
                    The exporter's authorised representative may request a printout of the query or shortcoming from the support centre.  Exporters must use the service 
                    centre to respond to these enquiries.  Only until the Service Centre has input the answers to the questions or shortcomings will the claim appear in the 
                    EDI system's queue.
                    </p>
                    <p className="importtext">
                    Every claim that has been approved on a given day is listed in a scroll and sent to the bank via the system.  The drawback amount is credited 
                    by the bank to the exporters' individual accounts.  The exporters of such credits made in their accounts may receive a statement from the bank 
                    every two weeks.
                    </p>
                    <p className="importtext">
                    The EGM may be electronically transferred by the shipping line or steamer agent to the Customs EDI system in order to verify the actual shipment of 
                    the commodities and allow Customs to approve the drawback claims.
                    </p>
                    <strong className='importhead'>Production of Shipping Bills:</strong>
                    <p className="importtext">
                    The system creates two copies of the shipping bill-one for Customs and one for the exporter (the E.P. copy is created upon the submission of the EGM)-
                    after the appraiser enters the "let export" order.  The appraiser gets the Customs Officer's signature on the examination report and the CHA 
                    representative's signature on both the shipping bill and the examination report after obtaining the printout.  Both copies of the shipping bill are 
                    then signed and stamped by the appraiser at the designated location. 
                    </p>
                    <p className="importtext">
                    The original and duplicate copies of the SDF are also signed and stamped by the appraiser.  Together with the original declarations made by the appraiser, 
                    a copy of the shipping bill and the original SDF are kept by customs and sent to the Custom House's Export Department.  He has the option to give the 
                    exporter or his agent back both the exporter copy and the second copy of the SDF.
                    </p>
                    <p className="importtext">
                    After the shipping bill is produced by the system, the AEPC quota and other certificates are kept in the dock with the shipping bill.  
                    The details of the quota placed into the system must be verified during the examination, in addition to confirming that the items are 
                    covered by the quota certifications. 
                    </p>
                    <strong className='importhead'>Export General Manifest:</strong>
                    <p className="importtext">
                    Within seven days of the ship's departure date, all shipping lines and agents must electronically submit the Export General Manifests to Customs, 
                    shipping bill by shipping bill.
                    </p>
                    <p className="importtext">
                    According to current export department procedures, shipping lines must continue to file manual EGMs along with the exporter copy of the shipping 
                    invoices in addition to electronically filing the EGM.  The shipping lines may receive acknowledgements stating the date and time the EGMs were 
                    received by the Export Department, and the manual EGMs must be put in the register at the Export Department.
                    </p>
                    <p className="importtext">
                    The standard export process under EDI Systems is as follows.  However, certain schemes have particular procedures; information on these can be found in the 
                    Public Notice/Standing Orders that the relevant Commissionerates have issued.
                    </p>
                </ul>
            </div>
        </div>
        </>
    );
};

export default Importexportpage2;

