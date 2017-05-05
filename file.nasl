
      # Описание скрипта
      if(description){
          script_version("$Revision:1.0$");
          script_name(english: "");
          script_description(english: "");
          script_summary(english: "");
          script_category(english: "");
          script_copyright(english: "No-copyright");
          script_family(english: "");
          script_dependencies("find_service.nes");
          script_required_ports("Services/www", 80);
          exit(0);
      }
      # Начало проверки
          include("find_service.nes");
          port = get_kb_item("Services/www");
          if(!port) port = 80;
          if(!get_port_state(port)) exit(0);
          # Безопасная проверка
          if(safe_checks()) {
              b = get_http_banner(port:port);
              # Например, проверим соотвествует ли заголовок Apache/2
              if(b =~'Server: *Apache/2.') {
                  security_hole(port:port, data:report);
              }
              exit(0);
          } else {
            # Проверка на более жесткие методы (DDoS-атаки и т.д.)
            
          }
      