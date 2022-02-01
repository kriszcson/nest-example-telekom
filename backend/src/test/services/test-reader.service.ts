import { BadRequestException, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';

const readFileAsync = util.promisify(fs.readFile);

@Injectable()
export class TestReaderService {
    async readingFromTelekomResponseDataFileService(): Promise<string> {
        const telekomResponseDataFilePath =
            '../../../src/telekom-response-data/telekom-response-data.txt';
        try {
            const telekomResponseDataFileContent = await this.readContentFile(
                telekomResponseDataFilePath
            );
            return telekomResponseDataFileContent;
        } catch (error) {
            console.error(error);
            throw new BadRequestException();
        }
    }

    async readContentFile(filePath: string): Promise<string> {
        const content = await readFileAsync(path.join(__dirname, filePath), {
            encoding: 'utf8'
        });
        const singleLineOfText = this.getLineOfText(content, 0);
        return singleLineOfText;
    }

    getLineOfText(text: string, lineIndex: number): string {
        const textContentArrayPerRows = text.split(/\r\n|\n/);
        return textContentArrayPerRows[lineIndex];
    }
}
