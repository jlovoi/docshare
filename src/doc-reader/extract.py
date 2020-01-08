from lxml import etree
import zipfile

ooXMLns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

docxZip = zipfile.ZipFile('tpsReport_v69_420_vape.docx')

commentsXML = docxZip.read('word/comments.xml')
et = etree.XML(commentsXML)

comments = et.xpath('//w:comment', namespaces=ooXMLns)
for c in comments:
    # attributes:
    print(c.xpath('@w:author', namespaces=ooXMLns))
    print(c.xpath('@w:date', namespaces=ooXMLns))
    # string value of the comment:
    print(c.xpath('string(.)', namespaces=ooXMLns))
