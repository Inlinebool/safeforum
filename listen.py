import BaseHTTPServer  
import urlparse  
class WebRequestHandler(BaseHTTPServer.BaseHTTPRequestHandler):  
    def do_POST(self):  
        print 'post message'  
        parsed_path = urlparse.urlparse(self.path)   
        length = self.headers.getheader('content-length');  
        nbytes = int(length)  
        data = self.rfile.read(nbytes)
        print data  
server = BaseHTTPServer.HTTPServer(('0.0.0.0',8081), WebRequestHandler)  
server.serve_forever()  
