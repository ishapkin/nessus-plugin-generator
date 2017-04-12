import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import {plugin, family, categories} from './data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form;
  output     = plugin;
  categories = categories;
  family     = family;

    constructor(private formBuilder: FormBuilder) {

    this.form = formBuilder.group(plugin);

    this.form.valueChanges.subscribe(data => {
      this.output = data
    });
  }

  dataHandler(output = plugin) {

      for (let key in output) {
          if(['script_dependencies', 'script_family', 'script_category'].indexOf(key) === -1) {
              output[key] = this.toTransLit(output[key]);
          }
      }

      return `
      # Описание скрипта
      if(description){
          script_version("$Revision:1.0$");
          script_name(english: "${output.script_name}");
          script_description(english: "${output.script_description}");
          script_summary(english: "${output.script_summary}");
          script_category(english: "${output.script_category}");
          script_copyright(english: "${output.script_copyright}");
          script_family(english: "${output.script_family}");
          script_dependencies(${output.script_dependencies});
          script_required_ports("Services/www", ${output.script_required_ports});
          exit(0);
      }
      # Начало проверки
          include(${output.script_dependencies != '' ? output.script_dependencies : ''});
          port = get_kb_item("Services/www");
          if(!port) port = 80;
          if(!get_port_state(port)) exit(0);
          # Безопасная проверка
          if(safe_checks()) {
              b = get_http_banner(port:port);
              # Например, проверим соотвествует ли заголовок Apache/2
              if(b =~'Server: *Apache/2\.') {
                  security_hole(port:port, data:report);
              }
              exit(0);
          } else {
            # Проверка на более жесткие методы (DDoS-атаки и т.д.)
            
          }
      `;
  }

  /**
   *
   * @param text
   * @returns {string|any|void}
   */
  toTransLit(text) {
    return text.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,
        function (all, ch, space, words, i) {
          if (space || words) {
            return space ? '-' : '';
          }
          let code = ch.charCodeAt(0),
              index = code == 1025 || code == 1105 ? 0 :
                  code > 1071 ? code - 1071 : code - 1039,
              t = ['yo', 'a', 'b', 'v', 'g', 'd', 'e', 'zh',
                'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
                'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh',
                'shch', '', 'y', '', 'e', 'yu', 'ya'
              ];
          return t[index];
        });
  }

  ngOnInit() {
  }

}
