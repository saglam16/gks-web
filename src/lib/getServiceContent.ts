import fs from 'fs';
import path from 'path';

export type Service = {
  id: string;
  title: string;
  description: string;
  content: string;
};

export function getServiceContent(service: string): string {
  const filePath = path.join(process.cwd(), 'src', 'content', 'services', `${service}.md`);
  const content = fs.readFileSync(filePath, 'utf8');
  return content;
}

export function getAllServices(): Service[] {
  const services = [
    'kadastro',
    'imar',
    'cbs',
    'halihazir',
    'plankote',
    '3d-modelleme'
  ];

  return services.map(id => {
    const content = getServiceContent(id);
    const lines = content.split('\n');
    
    // İlk satır başlık (# ile başlar)
    const title = lines[0].replace('# ', '');
    
    // İkinci paragraf açıklama
    const description = lines.find((line, index) => index > 0 && line.trim() !== '')?.trim() || '';

    return {
      id,
      title,
      description,
      content
    };
  });
} 